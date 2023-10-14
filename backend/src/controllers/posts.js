import Post from "../models/post";
import User from "../models/user";
import Comment from "../models/comment";

export default {
  createPost,
  getPosts,
  getPostsLevel,
  getPost,
  updatePost,
  deletePost,
};

async function createPost(req, res, next) {
  try {
    const post = new Post(req.body);
    await post.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
  next();
}
async function getPosts(req, res, next) {
  let postList;
  try {
    postList = await Post.find({ status: "published" }).sort({ createdAt: -1 });
  } catch (err) {
    res.sendStatus(500);
    return;
  }
  res.json({ posts: postList });
  next();
}

async function getPostsLevel(req, res) {
  let postList;
  try {
    if (req.user.level == "admin" || req.user.level == "owner") {
      postList = await Post.find().sort({ createdAt: -1 });
    } else {
      postList = await Post.find({ author: req.user._id });
    }
  } catch (err) {
    res.sendStatus(500);
    return;
  }
  res.json({ posts: postList });
}

async function getPost(req, res, next) {
  let post;
  try {
    post = await Post.findById(req.params.postId);
  } catch (err) {
    res.sendStatus(500);
    return;
  }
  res.json({ post: post });
  next();
}
async function updatePost(req, res, next) {
  try {
    await Post.findOneAndUpdate(
      { _id: req.params.postId },
      {
        status: req.body.postType,
        title: req.body.postTitle,
        content: req.body.postContent,
      },
    );
    const user = req.user;
    user.password = "";
    res.json(user);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    next();
  }
}

async function deletePost(req, res, next) {
  //Delete post:
  const postPromise = new Promise((resolve, reject) => {
    Post.findByIdAndRemove(req.params.postId)
      .then(resolve)
      .catch((err) => reject(err));
  });
  //Delete post from user posts:
  const userPromise = new Promise((resolve, reject) => {
    User.findOneAndUpdate(
      { _id: req.user._id },
      { $pull: { posts: req.params.postId } },
    )
      .then(resolve)
      .catch((err) => reject(err));
  });
  //Delete post comments:
  const commentsPromise = new Promise((resolve, reject) => {
    Comment.find({ postContextId: req.params.postId })
      .then((found) => found)
      .then((found) => {
        const commentAndUserPromises = found.map((comment) => {
          const commentAndUserPromise = new Promise((resolve, reject) => {
            const deleteCommentPromise = new Promise((resolve, reject) => {
              Comment.findByIdAndDelete(comment._id)
                .then(resolve)
                .catch((err) => reject(err));
            });

            const updateUserPromise = new Promise((resolve, reject) => {
              User.findOneAndUpdate(
                { _id: comment.author },
                { $pull: { posts: comment._id } },
              )
                .then(resolve)
                .catch((err) => reject(err));
            });

            Promise.all([deleteCommentPromise, updateUserPromise])
              .then(resolve)
              .catch((err) => reject(err));

            return commentAndUserPromise;
          });
        });

        Promise.all(commentAndUserPromises)
          .then(resolve)
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });

  //Run promises in parallel:
  Promise.all([postPromise, userPromise, commentsPromise])
    .then(() => {
      res.sendStatus(200);
      next();
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
      next();
    });
}
