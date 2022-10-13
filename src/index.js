const express = require("express");
const { sequelize } = require("./database/database");
const { router } = require("./routes/index");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

async function main() {
  try {
    await sequelize.sync({ force: false });

    app.listen(3001, () => {
      console.log("server listen on port", 3001);
    });
  } catch (error) {}
}

main();

module.exports = {
  app,
  main,
};
