const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Task', taskSchema);