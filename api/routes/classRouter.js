const { Router } = require('express');
const classController = require('../controllers/ClassController');

const router = Router();

router.get('/classes', classController.index);

module.exports = router;