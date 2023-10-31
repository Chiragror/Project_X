import express from "express";
import Post from "../modesl/Post.js";
const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
    const posts = await Post.find();
    res.json({ Posts: posts });
  });
  
postRouter.get("/:id", async (req, res) => {
    const posts = await Post.find({
      _id: req.params.id,
    });
    res.json({ Posts: posts });
  });
  
  postRouter.post("/create", async (req, res) => {
    const newPost = await Post.create(req.body);
    res.json({ data: newPost });
  });
  
  postRouter.patch("/updatePost/:id", async (req, res) => {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body);
    console.log(updatePost, 'djdjjd');
    res.json({ data: updatePost });
  });
  
  postRouter.delete("/deletePost/:id", async (req, res) => {
    await Post.findByIdAndDelete(req.params.id);
    res.send("Post Delete Successfully.");
  });
  export default postRouter;