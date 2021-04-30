"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class patient extends Model {}
  patient.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "patient",
    }
  );
  class appointment extends Model {}
  appointment.init(
    {
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "appointment",
    }
  );
  class doctor extends Model {}
  doctor.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "doctor",
    }
  );
};

doctor.patient = patient.hasMany(doctor);
patient.doctor = doctor.hasMany(patient);
appointments.doctor = doctor.hasMany(appointments);
doctor.appointments = appointments.hasOne(doctor);
appointments.patient = patient.hasMany(appointments);
patient.appointments = appointments.hasOne(patient);
