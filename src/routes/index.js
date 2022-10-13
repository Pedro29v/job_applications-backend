const { Router } = require("express");
const { createJobApplication } = require("../controllers/createJobApplication");
const { editJobApplication } = require("../controllers/editJobApplication");
const { deleteTask } = require("../controllers/deleteJobApplication");
const { getJobApplication } = require("../controllers/getJobApplication");
const { registerUser } = require("../controllers/userRegister");
const { filterJobApplication } = require("../controllers/filter");

const router = Router();

router.post("/newAppli", createJobApplication);
router.put("/edit/:id", editJobApplication);
router.delete("/delete/:id", deleteTask);
router.get("/applications/:userEmail", getJobApplication);
router.get("/filter/:userEmail", filterJobApplication);
router.post("/newUser", registerUser);

module.exports = { router };
