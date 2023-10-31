import mongoose from "mongoose";


const PostSchema = mongoose.Schema({
    title: String,
    description: String
})

const Post = mongoose.model("Posts", PostSchema);

export default Post;