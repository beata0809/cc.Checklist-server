const mongoose = require('mongoose');

const { Schema } = mongoose;

const listSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
    tasks: {
        type: Array,
    }
});

module.exports = mongoose.model('List', listSchema);