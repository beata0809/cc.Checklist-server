const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    lists: [{
        type: Schema.Types.ObjectId,
        ref: 'Lists'
    }]
});

module.exports = mongoose.model('Project', projectSchema);