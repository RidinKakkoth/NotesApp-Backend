const express = require('express');
const cors = require('cors');
const db = require('./config/db'); 
const noteRoutes = require('./routes/notesRoutes');

const app = express();

const corsOptions = {
    origin: 'https://notesapp-frontend-3x3v.onrender.com', 
    methods: 'GET,POST,PUT,DELETE', 
    allowedHeaders: 'Content-Type,Authorization' 
};

app.use(cors(corsOptions));
app.use(express.json());

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

app.use('/', noteRoutes);

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
