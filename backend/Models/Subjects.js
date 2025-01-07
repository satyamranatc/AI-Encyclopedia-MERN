import mongoose from "mongoose";


let SubjectSchema = new mongoose.Schema({
    name: String,
    desc : String,
    poster: String,

})

let Subject = mongoose.model('Subject', SubjectSchema);

export default Subject;