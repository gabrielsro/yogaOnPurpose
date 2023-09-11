export default (stateSetter) => {
  const postMakerContent = document.getElementById("postContent");
  const postMakerTitle = document.getElementById("postTitle");
  if (postMakerContent.value || postMakerTitle.value) {
    stateSetter("written");
  }
  if (!postMakerContent.value && !postMakerTitle.value) {
    stateSetter("addPost");
  }
};
