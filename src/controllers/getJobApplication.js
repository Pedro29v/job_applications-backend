const { applications } = require("../database/database");

const getJobApplication = async (req, res) => {
  try {
    const { userEmail } = req.params;
    const { inf } = req.query;

    const allApplications = await applications.findAll({
      order: [
        // Will escape title and validate DESC against a list of valid direction parameters
        ["date", inf],
      ],
      where: {
        userEmail: userEmail,
      },
    });

    return res.status(200).json(allApplications);
  } catch (error) {
    return res.status(400).send(error);
  }
};

module.exports = { getJobApplication };
