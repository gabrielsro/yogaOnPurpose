export default { createUser, logUser };

async function createUser(req, res, next) {
  res.send("I was hit!");
  next();
}
async function logUser() {}
