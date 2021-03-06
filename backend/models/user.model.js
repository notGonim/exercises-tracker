const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minLength: 5
        }
    }, { timestamps: true })

const User = mongoose.model('User', userSchema)
module.exports = User