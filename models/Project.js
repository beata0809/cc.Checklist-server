const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    lists: [{
        type: Schema.ObjectId,
        ref: 'List'
    }]
});

module.exports = mongoose.model('Project', projectSchema);