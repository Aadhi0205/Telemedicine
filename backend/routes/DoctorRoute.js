const {
  registerDoctor,
  loginDoctor,
  getAllDoctors,
  getDocForAppointment,
  getSingleDoc,
  createReport,
} = require("../controller/DoctorController.js");
const express = require("express");

const router = express.Router();

router.post("/createDoctor", registerDoctor);
router.post("/loginDoctor", loginDoctor);
router.post("/getDocForAppointment", getDocForAppointment);
router.post("/singleDoc", getSingleDoc);
router.get("/allDoctors", getAllDoctors);
router.post("/createreport", createReport);

module.exports = router;
