
// backend/config/db.js
const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.connect('mongodb://localhost:27017/courseWebsite', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
};

module.exports = { dbConnection };