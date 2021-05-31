const db = require('../models');
const Errors = require('../errors/Exception/requestException/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class StudentServices {

    //GET  - TODOS OS REGISTROS DE ESTUDANTES ATIVAS
    async indexActive() {
        const students = await db.Students.findAll();
        if(!students) 
            throw Errors.NotFoundException('Students not found')

        return students
    }

    //GET - TODOS OS REGISTROS GERAIS
    async index() {
        const students = await db.Students.scope('all').findAll();
        if(!students) 
            throw Errors.NotFoundException('Students not found')

        return students
    }

    async show(id) {
        console.log(id)
        const student = await db.Students.findByPk(id)

        if(!student)
            throw Errors.NotFoundException('Student not found')

        return student
    }

    async store(student) {
        const newStudent = await db.Students.create(student)
        return newStudent;
    }

    async delete(id) {
        const student = await db.Students.findByPk(id)
        if(!student)
            throw Errors.NotFoundException('Student not found')

        await db.Students.destroy({
            where: {
                id: Number(id)
            }
        })

        return
    }

    async restore (id) {
        await db.Students.restore( {
            Where: {
                id: Number(id)
            }
        })

        return
    }

    //VER TURMA A QUAL ESTÁ MATRICULADO O ESTUDANTE
    async enrollments (studentID) {
        const student = await db.Students.findByPk(studentID)
        if(!student)
            throw Errors.NotFoundException('Student not found')
            
        const enrollment = await student.getEnrollmedClasses();
        return enrollment;
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

    async enrollment (register, studentID, class_id) {
        const student = await db.Students.findByPk(studentID)
        if(!student)
            throw Errors.NotFoundException('Student not found')

        const searchClass = await db.Classes.findByPk(class_id)
        if(!searchClass)
            throw Errors.NotFoundException('Class not found')

        const newRegister = await db.Enrollment.create(register)
        return newRegister
    }

    async enrollmentsByClass (class_id) {
            
        const studentsByClass = await db.Enrollment.findAndCountAll({
            where: {
                class_id: Number( class_id),
                status: 'Confirmado'
            },
            limit: 10,
            order: [ ['student_id', 'DESC'] ]
        })
        return studentsByClass;
    }


}

module.exports = StudentServices;