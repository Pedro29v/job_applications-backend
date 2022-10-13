const { user } = require("../database/database");

const registerUser = async (req, res) => {
  const { name, lastName } = req.body;

  try {
    await user.create({
      name,
      lastName,
    });

    return res.status(201).json("The new user was successfully created");
  } catch (error) {
    return res.status(400).send("error" + error);
  }
};

module.exports = { registerUser };
