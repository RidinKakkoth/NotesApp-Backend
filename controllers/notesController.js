const db = require('../config/db');

// Fetch all notes
const getNotes = (req, res) => {
    db.query('SELECT * FROM notes', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
};

// Add a new note
const addNote = (req, res) => {
    const { content } = req.body;
    db.query('INSERT INTO notes (content) VALUES (?)', [content], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId, content });
    });
};

// Delete a note
const deleteNote = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM notes WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        res.sendStatus(200);
    });
};

module.exports = {
    getNotes,
    addNote,
    deleteNote,
};
