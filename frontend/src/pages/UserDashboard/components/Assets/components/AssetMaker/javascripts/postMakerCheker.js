export default (stateSetter, editorRef) => {
  const postMakerTitle = document.getElementById("postTitle");
  if (postMakerTitle.value) {
    stateSetter("written");
  }
  if (!postMakerTitle.value) {
    const content = editorRef.current.getContent();
    !content && stateSetter("addPost");
  }
};
