const { Router } = require('express');
const studentController = require('../controllers/StudentController');

const router = Router();

router.get('/students', studentController.indexActive);
router.get('/students/all', studentController.index);
router.get('/students/:studentID/enrollment', studentController.enrollments);
router.get('/student/:id', studentController.show);
router.get('/students/enrollment/:classID/confirmed', studentController.enrollmentsByClass);
router.post('/students', studentController.store);
router.post('/students/:id/restore', studentController.restore);
router.delete('/students/:id', studentController.delete)

router.get('/students/:studentID/enrollments/:enrollmentID', studentController.register);
router.post('/students/:studentID/enrollment', studentController.enrollment);

module.exports = router;