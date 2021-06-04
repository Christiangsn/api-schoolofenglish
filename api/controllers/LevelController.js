const Errors = require('../errors/Exception/requestException/index');
const LevelsServices = require('../services/LevelServices');
const levelsServices = new LevelsServices();

class LevelController {

    static async index (req, res) {
        try {
            const allLvls = await levelsServices.show();
            return res.json(allLvls)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }
}

module.exports = LevelController;