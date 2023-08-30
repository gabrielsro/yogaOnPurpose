export default { createUser, logUser };

async function createUser(req, res, next) {
  console.log(req.body);
  res.send(req.body);
  next();
}
async function logUser() {}
