const { EnrollmentsServices } = require('../services');
const enrollmentsServices = new EnrollmentsServices(); 

class EnrollmentController {

    static async index(req, res) {
        try {
            const all = await enrollmentsServices.index()
            return res.json(all);
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }    

    }

    static async show(req, res){
        const { status } = req.query 

        try {
            const all = await enrollmentsServices.index({ status: status })
            return res.json(all);
        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }    

    }

    static async store (req, res) {
        const { studentID } = req.params
        const register = { ...req.body, student_id: studentID }
        const { class_id } = req.body

        try {
            await enrollmentsServices.store(
                { id: Number(studentID) },
                { id: Number(class_id) },
                register
            )
            return res.json({message: 'Matrículado com Sucesso!!!!'})

        } catch (error) {
            return res.status(error.status || 400).json({error: {message: error.message || "Ocorreu um erro inesperado", status: error.status || 400}})
        }      
        
    }
        

}

module.exports = EnrollmentController;

