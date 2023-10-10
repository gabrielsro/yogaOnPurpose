import Comment from "../models/comment";

export async function createEventComment(req, res, next) {
  const newComment = new Comment({
    author: req.user._id,
    authorName: `${req.user.firstName} ${req.user.lastName}`,
    authorProfilePic: req.user.profilePic,
    content: req.body.content,
    contextType: "event",
    eventContextId: req.params.assetId,
    eventTarget: req.params.assetId,
    depth: req.body.depth,
  });
  try {
    await newComment.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
  next();
}

export async function createPostComment(req, res, next) {
  const newComment = new Comment({
    author: req.user._id,
    authorName: `${req.user.firstName} ${req.user.lastName}`,
    authorProfilePic: req.user.profilePic,
    content: req.body.content,
    contextType: "post",
    postContextId: req.params.assetId,
    postTarget: req.params.assetId,
    depth: req.body.depth,
  });
  try {
    await newComment.save();
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
  next();
}

export async function getEventComments(req, res, next) {
  try {
    const comments = await Comment.find({
      contextType: "event",
      eventContextId: req.params.assetId,
      depth: 0,
    });
    res.json(comments);
    next();
  } catch (err) {
    res.sendStatus(500);
    next();
    return;
  }
  return;
}

export async function getPostComments(req, res, next) {
  try {
    const comments = await Comment.find({
      postTarget: req.params.assetId,
      depth: 0,
    });
    res.json(comments);
    next();
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    return;
  }
}

export async function createReply(req, res, next) {
  req.body.author = req.user._id;
  req.body.authorName = `${req.user.firstName} ${req.user.lastName}`;
  req.body.authorProfilePic = req.user.profilePic;
  console.log(req.body);
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    await Comment.findByIdAndUpdate(savedComment.commentTarget, {
      $push: { comments: savedComment._id },
    });
    res.sendStatus(200);
    next();
    return;
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    next();
    return;
  }
}

export async function getReplies(req, res, next) {
  try {
    const replies = await Comment.findById(
      req.params.assetId,
      "comments",
    ).populate("comments");
    res.json(replies.comments);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    next();
    return;
  }
}
