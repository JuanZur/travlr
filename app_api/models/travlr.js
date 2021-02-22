const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1';
const dbURI = `mongodb://${host}:27017/travlr`;
const readLine = require('readline');

// avoid 'current server discovery and monitoring engine is deprecated'
mongoose.set('useUnifiedTopology', true);

const connect = () => {
    setTimeout(()=> mongoose.connect("mongodb://localhost:27017/travlr", {
        useNewUrlParser: true,
        useCreateIndex: true
    }), 1000)
};


connect();

// Trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true},
    name: {type: String, required: true, index: true },
    length: {type: String, required: true },
    start: { type: Date, required: true },
    resort: { type: String, required: true },
    perPerson: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
});

mongoose.model('trips', tripSchema)

module.exports = mongoose;