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

    //GET - TODOS OS REGISTROS GERAIS ATIVOS
    async indexActive (where = {}) {
        const students = await db[this.model].findAll( { where: { ...where } } );
        if(!students) 
            throw Errors.NotFoundException('Students not found')
        return students
    }

    async indexAll ( where = {} ) {
        const students = await db[this.model].scope('all').findAll( { where: { ...where } } )
        if(!students) 
            throw Errors.NotFoundException('Students not found')
        return students
    }

    async restore (id) {
        const register = await db[this.model].restore( { Where: {  id: id } })
        if(!register)
            throw Errors.NotFoundException('Register not found')
        return
    }

    async indexByEnrollments(where = {}) {
      
        const student = await db[this.model].findOne( { where: { ...where } })
        if(!student)
            throw Errors.NotFoundException('Student not found')
            
        const enrollment = await student.getEnrollmedClasses();
        return enrollment;
    }




}

module.exports = StudentServices;