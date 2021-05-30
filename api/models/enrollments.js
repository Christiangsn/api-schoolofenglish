'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    static associate(models) {
      Enrollment.belongsTo(models.Students, {
        foreignKey: 'student_id'
      })
      Enrollment.belongsTo(models.Classes, {
        foreignKey: 'class_id'
      })
    }
  };
  Enrollment.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enrollment',
    paranoid: true
  });
  return Enrollment;
};