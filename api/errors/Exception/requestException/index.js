const ConflictException = require('./ConflictException');
const NotFoundException = require('./NotFoundException');
const BadExceptionError = require('./BadRequestException');
const UnprocessableEntity = require('./UnprocessableException');
const ForbiddenException = require('./ForbiddenException');
const UnauthorizedException = require('./UnauthorizedException');
const LengthException = require('./LengthRequiredException');

module.exports =  {

    BadException: (msg) => new BadExceptionError (msg) ,
    ConflictException: (msg) => new ConflictException (msg) ,
    UnprocessableEntity: (msg)  => new UnprocessableEntity (msg) ,
    NotFoundException: (msg) => new NotFoundException (msg) ,
    ForbiddenException: (msg) => new ForbiddenException (msg),
    UnauthorizedException: (msg) => new UnauthorizedException (msg),
    LengthException: (msg) => new LengthException(msg)
    
}

