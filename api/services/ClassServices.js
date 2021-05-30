const db = require('../models');
const Errors = require('../errors/Exception/requestException/index');

class ClassServices {

    async index() {
        const classes = await db.Classes.findAll();
        if(!classes) 
            throw Errors.NotFoundException('Class not found')

        return classes
    }

}

module.exports = ClassServices;