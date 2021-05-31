const db = require('../models');
const Errors = require('../errors/Exception/requestException/index');

class ClassServices {

    async index(where) {
        const classes = await db.Classes.findAll( { where });
        if(!classes  || classes.length == 0) 
            throw Errors.NotFoundException('Class not found')

        return classes
    }

}

module.exports = ClassServices;