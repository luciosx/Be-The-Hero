const crypto = require('crypto');

module.exports = function generateUniqueId(){
    return crypto.randomBytes(4).toString('HEX');   /*gera um codigo de 4 bytes hexadecimais
                                                    *Que vai ser o id da ong
                                                    */
}