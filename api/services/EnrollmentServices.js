const Services = require('./Services');

class EnrollmentsServices extends Services {
    
    constructor () {
        super('Enrollment')
    }

    async store ( studentID, classID, where = {} ) {

    }
}

module.exports = EnrollmentsServices;