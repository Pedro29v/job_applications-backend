const { applications } = require("../database/database");

const editJobApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    await applications.update(
      { status: name },
      {
        where: {
          id: id,
        },
      }
    );

    return res.status(204).json();
  } catch (error) {
    return res.status(404).send(error);
  }
};

module.exports = { editJobApplication };
