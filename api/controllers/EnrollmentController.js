const { EnrollmentsServices } = require('../services');
const Sequelize = require('sequelize');

const enrollmentsServices = new EnrollmentsServices(); 

class EnrollmentController {

    static async show (req, res) {
        const { studentID } = req.params
        const register = { ...req.body, student_id: studentID }
        const { class_id } = req.body
       
        try {
            const newRegister = await enrollmentsServices.show(register, studentID, class_id)
            return res.json(newRegister)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async store (req, res) {
        const { studentID } = req.params
        const newRegister = { ...req.body, student_id: Number(studentID) }
    
        try {
            const register = await enrollmentsServices.store(newRegister)
            return res.json(register)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async update (req, res) {
        const { studentID, enrollmentsID } = req.params
        const infos = req.body

        try {
            const updated = await enrollmentsServices.update(infos, { id: Number(enrollmentsID), studentd_id: Number(studentID) })
            return res.json(updated)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async delete(req, res) {
        const { enrollmentID } = req.params

        try {
            const updated = await enrollmentsServices.update(infos, { id: Number(enrollmentsID), studentd_id: Number(studentID) })
            return res.json(updated)

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
    }

    static async showByClass(req, res){
        const { classID } = req.params

        try {
            const studentsByClass = await enrollmentsServices.show(  
                { class_id: Number(classID),  status: 'Confirmado' },
                { limit: 10,  order: [ ['student_id', 'DESC']]    })
            return res.json(studentsByClass);

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }
        
    }
    

}

module.exports = EnrollmentController;

