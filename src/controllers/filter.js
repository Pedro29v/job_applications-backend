const { applications } = require("../database/database");

const filterJobApplication = async (req, res) => {
  try {
    const { userEmail } = req.params;
    const { filtro } = req.query;

    const allApplications = await applications.findAll({
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ["date", "DESC"],
      ],
      where: {
        userEmail: userEmail,
        status: filtro,
      },
    });

    return res.status(200).json(allApplications);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { filterJobApplication };
