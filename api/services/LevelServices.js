const db = require('../models');
const Errors = require('../errors/Exception/requestException/index');

class LevelServices {

    async index() {
        const levels = await db.Levels.findAll();
        if(!levels) 
            throw Errors.NotFoundException('Levels not found')

        return levels
    }

}

module.exports = LevelServices;