const { applications } = require("../database/database");

const createJobApplication = async (req, res) => {
  const { company, date, position, country, modality, status, userEmail } =
    req.body;

  try {
    const query = await applications.findAll({
      where: { company: company, date: date, position: position },
    });

    if (query.length > 0) return res.status(400).json("Register already exist");

    await applications.create({
      company,
      date,
      position,
      country,
      modality,
      status,
      userEmail,
    });

    return res.status(201).json("The new register was successfully created");
  } catch (error) {
    return res.status(400).send("error" + error);
  }
};

module.exports = { createJobApplication };
