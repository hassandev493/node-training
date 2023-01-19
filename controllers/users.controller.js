const userService = require('../dal/users.dao')

module.exports = {
  createUser
};

async function createUser(req, res) {
  const reqBody = req.body;

  const user = await userService.addOne(reqBody)
  res.send({ user });
}

