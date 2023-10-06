export default (stateSetter) => {
  const eventMakerName = document.getElementById("eventName");
  const eventMakerDate = document.getElementById("eventDate");
  const eventMakerLocation = document.getElementById("eventLocation");

  if (
    eventMakerDate.value &&
    eventMakerName.value &&
    eventMakerLocation.value
  ) {
    stateSetter("written");
    return;
  } else {
    stateSetter("addEvent");
  }
};
