const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://neha:1234@cluster0.7nim7.mongodb.net/data1?retryWrites=true&w=majority"
    )
}

