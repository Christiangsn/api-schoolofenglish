const db = require('../models');
const Errors = require('../errors/Exception/requestException/index');
const Services = require('./Services')

class StudentServices extends Services {

    constructor () {
        super('Students')
        this.enrollments = new Services('Enrollment')
    }

    async disable (studentID) {
        //Transação
        db.sequelize.transaction(async transf => {
            await db[this.modelStudents].update( { active: false }, { where: { id: studentID }
            }, { transaction: transf })
            await db.Enrollment.update( { status: 'Cancelado' }, { where: { student_id: studentID }
            }, { transaction: transf })
        })
        return     
    }

    async enrollments (studentID) {
        const student = await db[this.nameModel].findByPk(studentID)
        if(!student)
            throw Errors.NotFoundException('Student not found')
            
        const enrollment = await student.getEnrollmedClasses();
        return enrollment;
    }







    //GET - TODOS OS REGISTROS GERAIS ATIVOS
    async indexActive (where = {}) {
        const students = await db[this.model].findAll( { where: { ...where } } );
        if(!students) 
            throw Errors.NotFoundException('Students not found')
        return students
    }

    //TODOS OS REGISTROS GERAIS
    async index( where = {} ) {
        const students = await db[this.model].findAll( ( where = {} ) );
        if(!students) 
            throw Errors.NotFoundException('Students not found')
        return students
    }




    //VER TURMA A QUAL ESTÁ MATRICULADO O ESTUDANTE

    
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
        const student = await db[this.modelStudents].findByPk(studentID)
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