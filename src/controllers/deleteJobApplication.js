const { applications } = require("../database/database");

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    await applications.destroy({ where: { id: id } });

    return res.status(204).json();
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { deleteTask };
