import Event from "../models/event";
import User from "../models/user";
import Comment from "../models/comment";
import deleteImages from "../utils/cdn/deleteImages";

export default {
  createEvent,
  getEvents,
  getEventsAccount,
  updateEvent,
  deleteEvent,
  getEvent,
};

async function createEvent(req, res, next) {
  req.body.organizers.push(req.user._id);
  const newEvent = new Event(req.body);

  try {
    await newEvent.save();
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(500);
    console.log(err);
    next(err);
  }
}

async function updateEvent(req, res, next) {
  console.log(req.body);

  let oldEvent;

  try {
    oldEvent = await Event.findOneAndUpdate(
      { _id: req.params.eventId },
      req.body,
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    return;
  }

  let pics = [];

  req.body.mainImage && oldEvent.mainImage && pics.push(oldEvent.mainImage);

  req.body.secondaryImage &&
    oldEvent.secondaryImage &&
    pics.push(oldEvent.secondaryImage);

  if (pics.length > 0) {
    try {
      await deleteImages(pics);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
  }

  res.sendStatus(200);

  next();
}

async function getEvents(req, res, next) {
  try {
    const events = await Event.find()
      .sort({ createdAt: -1 })
      .populate("organizers");
    res.json({ events });
    next();
  } catch (err) {
    res.sendStatus(500);
  }
}

async function getEvent(req, res, next) {
  try {
    const event = await Event.findById(req.params.eventId).populate(
      "organizers",
    );
    res.json(event);
    next();
  } catch (err) {
    res.sendStatus(500);
    next();
  }
}

async function getEventsAccount(req, res) {
  try {
    const events = await Event.find()
      .populate("organizers", "firstName lastName")
      .sort({ createdAt: -1 });
    res.json({ events });
  } catch (err) {
    res.sendStatus(500);
  }
}

async function deleteEvent(req, res, next) {
  try {
    const removedEvent = await Event.findOneAndRemove({
      _id: req.params.eventId,
    });

    const imagesToDelete = [
      removedEvent.mainImage,
      removedEvent.secondaryImage,
    ].filter((image) => image);
    imagesToDelete.length > 0 && deleteImages(imagesToDelete);

    const userUpdatePromise = new Promise((resolve, reject) => {
      const userUpdatesPromises = removedEvent.organizers.map((organizer) => {
        const promise = new Promise((resolve, reject) => {
          User.findByIdAndUpdate(organizer, {
            $pull: { events: req.params.eventId },
          })
            .then(resolve)
            .catch((err) => reject(err));
        });
        return promise;
      });
      Promise.all(userUpdatesPromises)
        .then(resolve)
        .catch((err) => reject(err));
    });

    const commentsRemovalPromise = new Promise((resolve, reject) => {
      const commentPromises = removedEvent.comments.map((comment) => {
        const commentPromise = new Promise((resolve, reject) => {
          const deleteCommentPromise = new Promise((resolve, reject) => {
            Comment.findOneAndRemove(comment)
              .then(resolve)
              .catch((err) => reject(err));
          });

          const updateUserPromise = new Promise((resolve, reject) => {
            User.findOneAndUpdate(
              { comments: { $in: [comment] } },
              { $pull: { comments: comment } },
            )
              .then(resolve)
              .catch((err) => reject(err));
          });

          Promise.all([deleteCommentPromise, updateUserPromise])
            .then(resolve)
            .catch((err) => reject(err));
        });
        return commentPromise;
      });

      Promise.all(commentPromises)
        .then(resolve)
        .catch((err) => reject(err));
    });

    Promise.all([userUpdatePromise, commentsRemovalPromise])
      .then(res.sendStatus(200))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
        next();
      });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    next();
  }
}
