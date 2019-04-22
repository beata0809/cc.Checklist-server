const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 250
    },
    projects: [{
        type: Schema.ObjectId,
        ref: 'Project'
    }]
});

module.exports = mongoose.model('User', userSchema);