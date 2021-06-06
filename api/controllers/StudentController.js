const { StudentsServices } = require('../services');
const students = new StudentsServices(); 

class StudentController {

    static async indexActive (req, res) {
        try {
            const allStudents = await students.indexActive();
            return res.json(allStudents)
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async index (req, res) {

        try {
            const allStudents = await students.indexAll();
            return res.json(allStudents)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async show (req, res) {
        const { id } = req.params

        try {
            const student = await students.show( { id: Number(id) } )
            return res.json(student)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async store (req, res) {
        const newStudent = req.body

        try {
            const student = await students.store(newStudent);
            return res.json('Cadastrado com Sucesso')
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async update (req, res) {
        const { id } = req.params
        const infos = req.body
        try {
            await students.update(infos, Number(id));
            return res.json('Editado com Sucesso!!')
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }

    }

    static async delete (req, res) {
        const { id } = req.params

        try {
            await students.delete(Number(id));
            return res.json({ mensagem: 'Estudante Desativado com Sucesso!!' })

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async restore (req, res ) {
        const { id } = req.params 

        try {
            await students.restore(Number(id));     
            return res.json({ messagem: `id: ${id} has been reactivated` })
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }

    }

    static async showByEnrollment (req, res) {
        const { studentID } = req.params
        
        try {
            const enrollments = await students.indexByEnrollments({ id: Number(studentID)});
            return res.json(enrollments);      
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }

    }

}

module.exports = StudentController;