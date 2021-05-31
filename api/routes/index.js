const bodyParser = require('body-parser');
const students = require('./studentRoute');
const levels = require('./levelRoute');
const classes = require('./classRouter');

module.exports = app => {
    app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    students,
    levels,
    classes
    );

}