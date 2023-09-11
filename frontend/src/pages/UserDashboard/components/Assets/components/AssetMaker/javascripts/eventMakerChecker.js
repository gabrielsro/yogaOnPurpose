export default (stateSetter) => {
  const eventMakerName = document.getElementById("eventName");
  const eventMakerDate = document.getElementById("eventDate");
  const eventMakerLocation = document.getElementById("eventLocation");
  const eventMakerDescription = document.getElementById("eventDescription");

  if (
    eventMakerDate.value &&
    eventMakerName.value &&
    eventMakerDescription.value &&
    eventMakerLocation.value
  ) {
    stateSetter("written");
    return;
  } else {
    stateSetter("addEvent");
  }
};
