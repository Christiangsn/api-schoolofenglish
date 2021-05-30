const bodyParser = require('body-parser');
const students = require('./studentRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(students)

}