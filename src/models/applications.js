const { DataTypes } = require("sequelize");

const applicationsModel = (sequelize) => {
  sequelize.define(
    "applications",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      modality: {
        type: DataTypes.ENUM("Remote", "On-site", "Hybrid"),
        allowNull: false,
        defaultValue: "Remote",
      },
      status: {
        type: DataTypes.ENUM("Rejected", "Successful", "In process"),
        allowNull: false,
        defaultValue: "In process",
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
module.exports = {
  applicationsModel,
};
