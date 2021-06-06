const { Router } = require('express');
const studentController = require('../controllers/StudentController');

const router = Router();


router.get('/students', studentController.index);
router.get('/students/actives', studentController.indexActive);
router.get('/students/:id', studentController.show);
router.get('/students/:studentID/enrollment', studentController.showByEnrollment);

router.post('/students/create', studentController.store);
router.post('/students/restore/:id', studentController.restore);

router.put('/students/edit/:id', studentController.update);

router.delete('/students/desible/:id', studentController.delete);

module.exports = router;