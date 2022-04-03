const express= require("express");
const mongoose= require("mongoose");
const app= express();


const adminSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
});

const Admin = mongoose.model("admin", adminSchema);
module.exports= Admin