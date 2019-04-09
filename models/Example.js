const mongoose = require('mongoose');

const { Schema } = mongoose;

const exampleSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Example', exampleSchema);