const bodyParser = require('body-parser');
const students = require('./studentRoute');
const levels = require('./levelRoute');
const classes = require('./classRouter');
const enrollments = require('./enrollmentRouter');

module.exports = app => {
    app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    students, levels, classes, enrollments
    );

}