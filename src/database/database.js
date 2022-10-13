const { Sequelize } = require("sequelize");
const { userModel } = require("../models/users.js");
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

userModel(sequelize);
applicationsModel(sequelize);

const { user, applications } = sequelize.models;
user.hasMany(applications, {
  sourceKey: "id",
});
applications.belongsTo(user, {
  targetKey: "id",
});

module.exports = {
  sequelize,
  user,
  applications,
};
