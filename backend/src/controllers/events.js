import Event from "../models/event";

export default {
  createEvent,
  getEvent,
  getEventsAccount,
  updateEvent,
  deleteEvent,
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

async function getEvent() {}

async function getEventsAccount(req, res, next) {
  try {
    const events = await Event.find().populate(
      "organizers",
      "firstName lastName",
    );
    res.json({ events });
    next();
  } catch (err) {
    res.sendStatus(500);
  }
}
async function updateEvent() {}
async function deleteEvent() {}
