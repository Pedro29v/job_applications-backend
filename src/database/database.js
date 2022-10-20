const { Sequelize } = require("sequelize");
const { applicationsModel } = require("../models/applications.js");

const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "postgres",
    logging: false,
  }
);

applicationsModel(sequelize);

const { applications } = sequelize.models;

module.exports = {
  sequelize,
  applications,
};
