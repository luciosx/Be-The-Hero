const crypto = require("crypto");
const connection = require('../database/connection');//importação da conexão com o banco

module.exports = {
    async index (request, response) {
        const ongs = await connecton('ongs').select('*');
   
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email,whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            name,
            email,
            whatsapp,
            city,
            uf,
    })

    return response.json({ id });
    }
}