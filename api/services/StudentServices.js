const db = require('../models');
const Errors = require('../errors/Exception/requestException/index');

class StudentServices {

    async index() {
        const students = await db.Students.findAll();
        if(!students) 
            throw Errors.NotFoundException('Students not found')

        return students
    }

    async show(id) {
        const student = await db.Students.findOne( {
            Where: {
                id: Number(id)
            }
        })

        if(!student)
            throw Errors.NotFoundException('Student not found')

        return student
    }

    


}

module.exports = StudentServices;