const express = require("express");
const app = express();
let PORT = 5000;

const sendMail = require("./controllers/sendMail");

app.get("/", async (req, res) => {
    console.log("Root endpoint hit");
    res.send("I am server");
});

app.get("/mail", async (req, res) => {
    console.log("/mail endpoint hit");
    await sendMail(req, res);
});

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`I am listening on port number ${PORT}`);
        });
    } catch (error) {
        console.log("error", error);
    }
};

start();
