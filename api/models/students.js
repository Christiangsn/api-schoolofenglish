'use strict';
const Errors = require('../errors/Exception/requestException/index');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    static associate(models) {
       Students.hasMany(models.Classes, {
         foreignKey: 'register_id'
       })
       Students.hasMany(models.Enrollment, {
          foreignKey: 'student_id',
          scope: { status: 'Confirmado' },
          as: 'Enrollments'
       })
    }
  };
  Students.init({
    name:{ 
      type: DataTypes.STRING,
      validate: {
        validate: (arg) => {
            if (arg.length < 3 ) 
              throw Errors.LengthException('Invalid name characteristics')
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email:{ 
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email invalid'
        }
      }
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Students',
    paranoid: true,

    //Definindo atributos de get para retornar com alguma regra, 
    defaultScope: {
      where: {
        active: true
      }
    },
    scopes: {
      all: {
        where:  {}
      }
    }
  });
  return Students;
};