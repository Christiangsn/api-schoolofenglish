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

    async store(student) {
        const newStudent = await db.Students.create(student)
        return newStudent;
    }
    
    async register(studentID, enrollmentID) {
        
        const register = await db.Enrollment.findOne( {
            Where: {
                id: Number(enrollmentID),
                studentID: Number(studentID)
            }
        })

        if(!register)
            throw Errors.NotFoundException('Register not found')
        
        return register
    }

    async enrollment (register) {
        const newRegister = await db.Enrollment.create(register)
        return newRegister
    }






}

module.exports = StudentServices;