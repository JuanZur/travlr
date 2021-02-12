const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = 'mongodb://${host}/travlr';
const readLine = require('readline');

// avoid 'current server discovery and monitoring engine is deprecated'
mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(()=> mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useCreateIndex: true
    }), 1000)
};

connect();

require('./travlr')