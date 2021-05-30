const HttpException = require("../../HttpException");

class LengthException extends HttpException {

    constructor(msg) {
        super(msg || 'Length Required', 411) 
    }

}

module.exports = LengthException

