const express = require('express');
const { postAdmission, getOneStudent, deleteStudent, editStudentEntry, fieldEdit } = require('../controllers/studentsController');
const { getAllAdmission } = require('../controllers/studentsController');
const router = express.Router();


router.post('/', postAdmission);
router.get('/students', getAllAdmission)
router.get('/students/:id', getOneStudent)
router.delete('/delete/:id' , deleteStudent)
router.put('/edit/:id', editStudentEntry)
router.patch('/editfield/:id', fieldEdit)

module.exports = router;
