import Event from "../models/event";

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

async function updateEvent() {}
async function deleteEvent() {}
