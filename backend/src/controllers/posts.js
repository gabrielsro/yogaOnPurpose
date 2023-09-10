import Post from "../models/post";

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
    res.sendStatus(500);
  }
  next();
}
async function getPosts(req, res, next) {
  let postList;
  try {
    postList = await Post.find({ status: "published" });
  } catch (err) {
    res.sendStatus(500);
    return;
  }
  res.json({ posts: postList });
  next();
}

async function getPostsLevel(req, res, next) {
  let postList;
  try {
    if (req.user.level == "admin" || req.user.level == "owner") {
      postList = await Post.find();
    } else {
      postList = await Post.find({ author: req.user._id });
    }
  } catch (err) {
    res.sendStatus(500);
    return;
  }
  res.json({ posts: postList });
  next();
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
async function updatePost() {}
async function deletePost() {}
