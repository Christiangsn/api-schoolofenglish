const studentsServices = require('../services/StudentServices');
const Errors = require('../errors/Exception/requestException/index');

class StudentController {

    static async index (req, res) {

        try {
            const students = new studentsServices();
            const allStudents = await students.index();
            return res.json(allStudents)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async show (req, res) {
            const { id } = req.params

        try {
            const students = new studentsServices();
            const student = await students.show(id);
            return res.json(student)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async store (req, res) {
        const newStudent = req.body

        try {
            
        } catch (error) {
            
        }
    }


}

module.exports = StudentController;