const Services = require('./Services');
const db = require('../models');
const Errors = require('../errors/Exception/requestException/index');


class EnrollmentsServices extends Services {
    
    constructor () {
        super('Enrollment')
        this.students = new Services('Students')
        this.classes = new Services('Classes')
    }

    async store ( studentID, classID, register) {
        await this.students.show(studentID);
        await this.classes.show(classID);
        await super.store(register)
        return       
    }


}

module.exports = EnrollmentsServices;