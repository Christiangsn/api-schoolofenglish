const Errors = require('../errors/Exception/requestException/index');
const levelsServices = require('../services/LevelServices');

class LevelController {

    static async index (req, res) {

        try {
            const levels = new levelsServices();
            const allLvls = await levels.index();
            return res.json(allLvls)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }
}

module.exports = LevelController;