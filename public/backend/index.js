// const mongoose = require("mongoose");
import mongoose from "mongoose";
import  express  from 'express';
import cors  from 'cors';
import 'dotenv/config';
import PostRoutes from './Routes/Post.js';
import AuthRoutes from './Routes/auth.js';
// const cors = require("cors");
// const bcrypt = require('bcryptjs');
// const User = require("./modesl/User"); 
// const PostRoutes= require("./Routes/Post");
// const AuthRoutes= require("./Routes/auth");

const app = express();
app.use(express.json());
app.use(cors());

app.use('/posts',PostRoutes);
app.use('/auth',AuthRoutes);

const CONNECTION_URL = "mongodb+srv://chiragsingh3102:Chiragsingh12345@backend.al6vdcn.mongodb.net/your-database-name"; 
mongoose.connect(CONNECTION_URL).then(() => {
  console.log("DB is connected");
});

app.listen(8000, () => {
  console.log("server is running on localhost 8000");
});
