const express= require("express");
const Submission = require("../model/submissions")
const app= express();

app.get("/", async (req, res) => {
    try {
        const submit = await Submission.find({}).populate({ path: "evalId", select: "date" }).populate({ path: "studId", select: "rollno" , populate:{path:"userId", select:["first_name", "last_name"]}}).lean().exec();

        res.status(200).send(submit)
    } catch (error) {
        console.log(error)
    }
})

app.get("/:id", async (req, res) => {
    try {
        const submit = await Submission.find({evalId:req.params.id}).populate({ path: "studId", select: "rollno" , populate:{path:"userId", select:["first_name", "last_name"]}}).sort({"marks":-1}).limit(1).lean().exec();

        res.status(200).send(submit)
    } catch (error) {
        console.log(error)
    }
})

app.get("/:id", async (req, res) => {
    try {
        const submit = await Submission.find({evalId:req.params.id}).populate({ path: "studId", select: "rollno" , populate:{path:"userId", select:["first_name", "last_name"]}}).lean().exec();

        res.status(200).send(submit)
    } catch (error) {
        console.log(error)
    }
})

app.post("/", async (req, res) => {

    try {
        const submit = await Submission.create(req.body);

        res.status(200).send(submit)
    } catch (error) {
        console.log(error);
    }
})

module.exports= app