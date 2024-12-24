const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Event = require("../models/event.js");
const initData = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/gatherly";;

main()
    .then(() => {
        console.log("Connect to DB");
    }) .catch((err) => {
        console.log(err);
    });

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Event.deleteMany({});
    // initData.data = initData.data.map((obj) => ({...obj, owner: "6754578d459668eacecb4202",}));
    await Event.insertMany(initData.data);

    console.log("Data was intialized");
};

initDB();