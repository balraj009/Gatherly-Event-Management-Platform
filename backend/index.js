const express = require("express");
const mongoose = require("mongoose");
const app = express();

const PORT = process.env.PORT || 8080;

const MONGO_URL = "mongodb://127.0.0.1:27017/gatherly";
// const atlasdb_url = process.env.ATLASDB_URL;

main()
    .then(() => {
        console.log("Connect to DB");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("I am Root");
});

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});