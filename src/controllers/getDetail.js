const { applications } = require("../database/database");

const getDetail = async (req, res) => {
  try {
    const { userEmail } = req.params;
    const { id } = req.query;

    const Application = await applications.findAll({
      where: {
        userEmail: userEmail,
        id: id,
      },
    });

    return res.status(200).json(Application);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { getDetail };
