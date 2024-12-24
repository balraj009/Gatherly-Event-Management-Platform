const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name: {
        type: String,
        requried: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
});

const Register = new mongoose.model("Register", registerSchema);
module.exports = Register;