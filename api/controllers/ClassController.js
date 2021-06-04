const Errors = require('../errors/Exception/requestException/index');
const ClassesServices = require('../services/ClassServices');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const classesServices = new ClassesServices(); 


class ClassController {

    static async index (req, res) {
        const { init_date, final_date } = req.query
        const where = {}

        // OPERANDO QUERYS PARA INJETAR PARAMETROS 
        // OP FUNÇÂO DO SEQUELIZE
        init_date || final_date ? where.init_date = {} : null;
        init_date ? where.init_date [Op.gte] = init_date : null;
        final_date ? where.init_date[Op.lte] = final_date : null;

        try {
            const allClasses = await classesServices.index(where);
            return res.json(allClasses)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async show (req, res) {
        const limitStudents = 2

        try {
            const studentsByClass = await classesServices.show(limitStudents);
            return res.json(studentsByClass)
            
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})

        }

    }

}

module.exports = ClassController;