const { Router } = require('express');
const studentController = require('../controllers/StudentController');

const router = Router();

router.get('/students', studentController.index);
router.get('/student/:id', studentController.show);
router.post('/student', studentController.store);


module.exports = router;