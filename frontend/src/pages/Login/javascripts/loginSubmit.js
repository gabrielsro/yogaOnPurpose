export default (e, stateSetter) => {
  e.preventDefault();
  stateSetter({ status: "loading", messages: null });
};
