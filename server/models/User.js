const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    duration: {
        type: Number, // in minutes
        required: true
    },
    type: {
        type: String, // 'meditation', 'breathing'
        required: true
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    meditationHistory: [SessionSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
