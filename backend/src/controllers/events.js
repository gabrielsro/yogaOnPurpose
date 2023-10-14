import Event from "../models/event";
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
  console.log(req.body);
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

async function deleteEvent() {}
