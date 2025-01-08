import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import "dotenv/config"

import Subject from './Models/Subjects.js';
import Topic from './Models/Topic.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB...");
});


// Routes:

app.get("/",(req, res)=>{
    res.send("Welcome to the App API");
})


app.get("/subjects", async (req, res) => {
    let subjects = await Subject.find();
    res.json(subjects);
})

app.post("/subjects", async (req, res) => {
    let {name,desc,poster} = req.body;
    let newSubject = new Subject({name,desc,poster});
    await newSubject.save();
    res.json(newSubject);
})

app.delete("/subjects", async (req, res) => {
    let {id} = req.body;
    console.log(id)
    await Subject.findByIdAndDelete(id);
    res.json("Subject deleted successfully");
})


// -----Topics Apis:

app.get("/topics", async (req, res) => {
    let topics = await Topic.find()
    res.json(topics);
});

app.post("/topicsById", async (req, res) => {
    let {SubjectId} = req.body
    let topics = await Topic.find({ SubjectId })
    res.json(topics);
});


app.post("/topics", async (req, res) => {
    let {name,desc,poster,SubjectId} = req.body;
    let newTopic = new Topic({name,desc,poster,SubjectId});
    await newTopic.save();
    res.json({
        message: "Topic created successfully",
    });
})

app.delete("/topics", async (req, res) => {
    let {id} = req.body;
    await Topic.findByIdAndDelete(id);
    res.json("Topic deleted successfully");
})


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})