const { Router } = require('express');
const studentController = require('../controllers/StudentController');

const router = Router();

router.get('/students', studentController.index)
router.get('/student/:id', studentController.show)

module.exports = router;