const userService = require("../dal/users.dao");
const userValidator = require("../validators/users.validator");





module.exports = {
  createUser,
};

async function createUser(req, res) {
  const reqBody = req.body;

  const { error, value } = userValidator.userSchema.validate(reqBody);
  if(error !== undefined) {
    return res.send({message:"Invalid Body" , error})
  }
  const user = await userService.addOne(reqBody);
  res.send({ user });
}
