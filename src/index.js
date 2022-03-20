const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "./uploads"))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
})

const upload = multer({ storage: fileStorage });

app.post("/single", upload.single("image"), (req, res) => {
    res.send("successful");
})

app.listen(2990, () => {
    console.log("listening on port 2990");
});