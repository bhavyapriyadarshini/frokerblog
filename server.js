const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const likeRoutes = require('./routes/likeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/blogs', blogRoutes);
app.use('/api/likes', likeRoutes);

// MongoDB Connection
const db = require('./config/db').MongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Start Server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
