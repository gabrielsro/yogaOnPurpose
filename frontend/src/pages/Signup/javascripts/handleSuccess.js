export default (stateSetter, successMessage) => {
  setTimeout(
    () => stateSetter({ status: "successDone", messages: successMessage }),
    3000,
  );
};
