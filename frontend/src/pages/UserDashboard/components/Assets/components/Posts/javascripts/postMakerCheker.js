export default (stateSetter) => {
  const postMaker = document.querySelector(".postMaker");
  if (postMaker.value) {
    stateSetter("written");
  }
  if (!postMaker.value) {
    stateSetter("addPost");
  }
  console.log(postMaker.value);
};
