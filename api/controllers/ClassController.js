const Errors = require('../errors/Exception/requestException/index');
const ClassesServices = require('../services/ClassServices');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
            const classes = new ClassesServices();
            const allClasses = await classes.index(where);
            return res.json(allClasses)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }
   
    //CONSULTAR LOTAÇÕES DE UMA SALA
    static async capacity (req, res) {
        const limitStudents = 2

        try {
            const classes = new ClassesServices();
            const studentsByClass = await classes.capacity(limitStudents);
            return res.json(studentsByClass)
            
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})

        }
  
    }

}

module.exports = ClassController;