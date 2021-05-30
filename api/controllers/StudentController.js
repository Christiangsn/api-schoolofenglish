const studentsServices = require('../services/StudentServices');
const Errors = require('../errors/Exception/requestException/index');

class StudentController {

    static async indexActive (req, res) {

        try {
            const students = new studentsServices();
            const allStudents = await students.indexActive();
            return res.json(allStudents)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

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
            const students = new studentsServices();
            const student = await students.store(newStudent);
            return res.json(student)
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async delete (req, res) {
        const { id } = req.params

        try {
            const students = new studentsServices();
            await students.delete(id);
            return res.json({ mensagem: 'record successfully deleted' })

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async restore (req, res ) {
        const { id } = req.params 

        try {
            const students = new studentsServices();
            await students.restore(id);     
            return res.json({ messagem: `id: ${id} has been reactivated` })
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }

    }

    static async enrollments (req, res) {
        const { studentID } = req.params

        try {
            const students = new studentsServices();
            const enrollments = await students.enrollments(studentID);
            return res.json(enrollments)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async register (req, res) {
        const { studentID, enrollmentID } = req.params

        try {
            const students = new studentsServices();
            const register = await students.register(studentID, enrollmentID);
            return res.json(register)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }  

    static async enrollment (req, res) {
        const { studentID } = req.params
        const register = { ...req.body, student_id: studentID }
        const { class_id } = req.body
       
        try {
            const students = new studentsServices();
            const newRegister = await students.enrollment(register, studentID, class_id);
            return res.json(newRegister)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }


}

module.exports = StudentController;