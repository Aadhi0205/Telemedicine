const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  adhaarno: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  prescription: [
    {
      docname: {
        type: String,
      },
      note: {
        type: String,
      },
      medicine: {
        type: String,
      },
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
    },
  ],
});

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
