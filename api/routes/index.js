const bodyParser = require('body-parser');
const students = require('./studentRoute');
const levels = require('./levelRoute');

module.exports = app => {
    app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    students,
    levels
    );

}