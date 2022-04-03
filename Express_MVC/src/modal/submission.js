const express= require("express");
const mongoose= require("mongoose");
const app= express();


const submitSchema = new mongoose.Schema({
    evalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "evaluation",
        required: true
    },
    studId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student",
        required: true
    },
    marks: { type: Number, required: true },

}, {
    timestamps: true,
    versionKey: false
})


const Submission = mongoose.model("submission", submitSchema);

module.exports= Submission;