const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    dateO: {
        type: Date,
        default: Date.now(),
    },
    name: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        require: true,
    },
    category: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    eligibility: {
        type: String,
        required: true,
    },
    paticipantCount: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String
    },
    caption: {
        type: String,
        required: true,
    },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;