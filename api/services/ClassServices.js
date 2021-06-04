const Services = require('./Services');

class ClassesServices extends Services {
    constructor () {
        super('Levels')
    }
}

module.exports = ClassesServices;



// const db = require('../models');
// const Errors = require('../errors/Exception/requestException/index');
// const Sequelize = require('sequelize');

// class ClassServices {

//     async index(where) {
//         const classes = await db.Classes.findAll( { where });
//         if(!classes  || classes.length == 0) 
//             throw Errors.NotFoundException('Class not found')

//         return classes
//     }

//     async capacity (limitStudents) {

//         const studentsByClass = await db.Enrollment.findAndCountAll({
//             where: {
//                 status: 'Confirmado'
//             },
//             //JUNTANDO E AGREGANDO OS MESMO VALORES DE X COLUNA
//             attributes: ['class_id'],
//             group: ['class_id'],
//             having: Sequelize.literal(`count(class_id) >= ${limitStudents}`)
//         })

//         return studentsByClass.count
//     }

// }

