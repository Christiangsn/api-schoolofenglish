const Errors = require('../errors/Exception/requestException/index');
const ClassesServices = require('../services/ClassServices');

class ClassController {

    static async index (req, res) {

        try {
            const classes = new ClassesServices();
            const allClasses = await classes.index();
            return res.json(allClasses)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }
}

module.exports = ClassController;