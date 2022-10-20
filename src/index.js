const express = require("express");
const { sequelize } = require("./database/database");
const { router } = require("./routes/index");
require("dotenv").config();
const cors = require("cors");
const { PORT } = require("./config");

console.log(process.env.PORT);

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

async function main() {
  try {
    await sequelize.sync({ force: false });

    app.listen(PORT, () => {
      console.log("server listen on port", PORT);
    });
  } catch (error) {}
}

main();

module.exports = {
  app,
  main,
};
