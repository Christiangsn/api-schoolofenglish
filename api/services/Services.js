const db = require('../models');
const Errors = require('../errors/Exception/requestException/index');

class Services {

    constructor(model) {
        this.model = model
    }
    //PEGAR TODOS OS REGISTROS
    async index ( where = {} ) {
        const registers = await db[this.model].findAll({ where: { ...where } });
        if(!registers)
            throw Errors.NotFoundException('register not found')
        return registers
    }
    // PEGAR APENAS UM REGISTRO
    async show( where = {} ) {

        const register = await db[this.model].findOne({ where: { ...where } })
        if(!register)
            throw Errors.NotFoundException('register not found')
        return register
        
    }

    async store(data) {
       return await db[this.model].create(data)
    }

    async update(info, id, transacao = {} ) {
        const register = await db[this.model].findByPk(id);
        if(!register)
            throw Errors.NotFoundException('register not found')

         return await db[this.model].update( info, 
            { where: { id: id} }, transacao )
        
    }

    async delete(id) {
        const register = await db[this.model].findByPk(id)
        if(!register)
            throw Errors.NotFoundException('Register not found')

        return await db[this.model].destroy( { where: { id: id } } )

    }



}

module.exports = Services;