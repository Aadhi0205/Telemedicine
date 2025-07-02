const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  appointments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  ],
  reports: [
    {
      BP: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      height: {
        type: Number,
      },
      sugar: {
        type: Number,
      },
      surgeries: {
        type: String,
      },
      heartrate: {
        type: Number,
      },
      pulserate: {
        type: Number,
      },
      image: {
        type: String,
      },
      name: {
        type: String,
      },
      patientID: {
        type: String,
      },
    },
  ],
});

const Doctor = mongoose.model("Doctor", doctorSchema);
module.exports = Doctor;
