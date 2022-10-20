const { Router } = require("express");
const { createJobApplication } = require("../controllers/createJobApplication");
const { editJobApplication } = require("../controllers/editJobApplication");
const { deleteTask } = require("../controllers/deleteJobApplication");
const { getJobApplication } = require("../controllers/getJobApplication");
const { registerUser } = require("../controllers/userRegister");
const { filterJobApplication } = require("../controllers/filter");
const { getDetail } = require("../controllers/getDetail");

const router = Router();

router.post("/newAppli", createJobApplication);
router.put("/edit/:id", editJobApplication);
router.delete("/delete/:id", deleteTask);
router.get("/applications/:userEmail", getJobApplication);
router.get("/filter/:userEmail", filterJobApplication);
router.get("/detail/:userEmail", getDetail);
router.post("/newUser", registerUser);
router.get("/", (req, res) => res.status(200).json({ ok: "todo bien" }));

module.exports = { router };
