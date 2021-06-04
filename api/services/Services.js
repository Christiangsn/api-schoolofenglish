const db = require('../models');

class Services {

    constructor(model) {
        this.model = model
    }
    //PEGAR TODOS OS REGISTROS
    async index () {
        const registers = await db[this.modelName].findAll();
        if(!register)
            throw Errors.NotFoundException('register not found')
        return register
    }
    // PEGAR APENAS UM REGISTRO
    async show( where = {} ) {
        const register = await db[this.modelName].findOne( { where: { ...where} } )
        if(!register)
            throw Errors.NotFoundException('register not found')
        return student
    }

    async store(data) {
        const register = await db[this.modelStudents].create(data)
        return register;
    }

    async update(info, id, transacao = {} ) {
        const updateinfos = await db[this.model].update( info, { where: { id: id} }, transacao )
        return updateinfos;
    }

    async delete(id) {
        const student = await db[this.modelStudents].findByPk(id)
        if(!student)
            throw Errors.NotFoundException('Student not found')

        await db[this.modelStudents].destroy({
            where: {
                id: Number(id)
            }
        })

        return
    }

    async restore (id) {
        await db[this.modelStudents].restore( { Where: {  id: Number(id) } })
        return
    }

}

module.exports = Services;