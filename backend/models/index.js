const mongoose = require('mongoose');
const {DB_URL} = require('../config');
mongoose.set('useCreateIndex', true);
const db = mongoose.createConnection(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

db.on('error', () => {
    console.log('Mongoose connection error')
});

db.on('connected', () => {
    console.log('Mongoose connection success')
});

module.exports = db;