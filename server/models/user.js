const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: [true],
            minLength: 3,
            maxLength: 30
        },
        password: {
            type: String,
            required: [true],
            minLength: 6
        },
        phone: {
            type: Number,
            match: ["^\d{10}$"]
        },
        email: {
            type: String,
            required: [true],
            lowercase: true,
            match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        address: String,
        location: {
            type: String,
            required: true
        }
    },
    {timestamps: true}
);

userSchema.method("toJSON", function () {
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});

const User = mongoose.model('User', userSchema);

module.exports = User;