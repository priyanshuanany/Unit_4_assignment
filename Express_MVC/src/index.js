const express = require("express");
const mongoose = require("mongoose");

const connectdb= require("./src/config/setup")

const User= require("./src/modal/user") ;
const Teacher= require("./src/modal/teacher")
const Student= require("./src/modal/students")
const Admin= require("./src/modal/admin");
const Batch= require("./src/modal/batch");
const Evaluation= require("./src/modal/evaluation");
const Submission= require("./src/modal/submissions");


const usersController= require("./src/crud/user_controller")
const teacherController= require("./src/crud/teacher_controller")
const studController= require("./src/crud/student_controller")
const batchController= require("./src/crud/batch_controller")
const adminController= require("./src/crud/admin_controller")
const evalController= require("./src/crud/eval_controller")
const submitController= require("./src/crud/submit_controller")



const app = express();

app.use(express.json())

app.use("/users",usersController )
app.use("/students",studController)
app.use("/teachers", teacherController);
app.use("/admins", adminController);
app.use("/batches", batchController);
app.use("/evaluations", evalController)
app.use("/submissions", submitController)


app.listen(5500, async () => {
    try {
        await connectDb();
    } catch (error) {
        console.log(error)
    }
    console.log("Listening to port 5500");
})