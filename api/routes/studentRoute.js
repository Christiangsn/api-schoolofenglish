const { Router } = require('express');
const studentController = require('../controllers/StudentController');

const router = Router();

router.get('/students', studentController.index);
router.get('/student/:id', studentController.show);
router.post('/student', studentController.store);

router.get('/students/:studentID/enrollments/:enrollmentID', studentController.register);
router.post('/students/:studentID/enrollment', studentController.enrollment);

module.exports = router;