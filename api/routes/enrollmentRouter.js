const { Router } = require('express');
const enrollments = require('../controllers/EnrollmentController');

const router = Router();

router.get('/enrollments', enrollments.index);
router.get('/enrollmentsCancelOrConfirm', enrollments.show);

router.post('/enrollments/:studentID/new', enrollments.store);


module.exports = router;