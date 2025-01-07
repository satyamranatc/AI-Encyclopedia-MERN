import mongoose from "mongoose";

let TopicSchema = new mongoose.Schema({
    name: String,
    desc : String,
    poster: String,
    SubjectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }
})

let Topic = mongoose.model('Topic', TopicSchema);

export default Topic;