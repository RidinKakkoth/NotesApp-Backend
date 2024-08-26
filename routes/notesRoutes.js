const express = require('express');
const router = express.Router();
const {getNotes,addNote,deleteNote} = require('../controllers/notesController');

router.get('/notes',getNotes);
router.post('/notes',addNote);
router.delete('/notes/:id',deleteNote);

module.exports = router;
