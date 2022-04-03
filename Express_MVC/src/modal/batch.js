const express= require("express");
const mongoose= require("mongoose");
const app= express();


const batchSchema = new mongoose.Schema({
    batch_name: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
})


const Batch = mongoose.model("batch", batchSchema);
module.exports= Batch