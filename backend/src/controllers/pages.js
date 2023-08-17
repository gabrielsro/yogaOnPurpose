export default { createPage, getPages, getPage, updatePage, deletePage };

async function createPage() {}
async function getPages(req, res, next) {
  res.send("I should send you all the pages");
  next();
}
async function getPage() {}
async function updatePage() {}
async function deletePage() {}
