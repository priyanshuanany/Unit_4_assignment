const mongoose= require("mongoose")

const connectDb = () => {
    return mongoose.connect("mongodb+srv://prianany:9507710387@cluster0.zmr5f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
}

module.exports = connectdb;