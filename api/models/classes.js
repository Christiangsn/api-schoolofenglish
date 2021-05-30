'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classes.hasMany(models.Enrollment, {
        foreignKey: 'class_id'
      })
      Classes.belongsTo(models.Students, {
        foreignKey: 'register_id'
      })
      Classes.belongsTo(models.Levels, {
        foreignKey: 'level_id'
      })
    }
  };
  Classes.init({
    init_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Classes',
    paranoid: true
  });
  return Classes;
};