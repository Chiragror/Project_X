import bcrypt from 'bcryptjs';
import  express  from 'express';
import User from "../modesl/User.js";
import jwt from'jsonwebtoken'
// import { DotenvConfigOptions } from 'dotenv';
// const express= require("express");
// const User = require("./modesl/User");
const authRouter= express.Router();


authRouter.post('/sign-up', async function (req, res) {
    const { name, email, username, phoneNumber, password, confirmPassword } = req.body;
    if (!password || !confirmPassword || password !== confirmPassword) {
      res.status(400).json({ message: "Password and ConfirmPassword should match." });
      return;
    }
    if (!name || !email || !phoneNumber || !username) {
      res.status(400).json({ message: "Fill all the required fields." });
      return;
    }
    const existingUser = await User.find({
      $or: [
        { email: email },
        { phoneNumber },
        { username }
      ]
    });
  
    if (existingUser && existingUser.length) {
      res.status(400).json({ message: "User already exists." });
      return;
    }
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt); 
    const user = await User.create({
      name,
      email,
      username,
      phoneNumber,
      password: hashPassword
    });
    res.status(201).json(user);
  });
  
  authRouter.post('/Login', async function (req, res) {
    const { username,password,  } = req.body;
    if (!username|| !password  ) {
      res.status(400).json({ message: "Fill all the required fields." });
    
    }
  
    
    const existingUser = await User.findOne({
     username : username
    });
  
    if (!existingUser ) {
      res.status(400).json({ message: "User doesn't exists." });
      return;
    }
    
    const matchPassword= await bcrypt.compare(password,existingUser.password);
    if(!matchPassword){
        res.status(400).json({message:"Incorect Credentials."});
    }
    const token = jwt.sign({ userId: existingUser._id, name: existingUser }, 'shhhhh');

    res.status(201).json({User:existingUser, token});
  });

  export default authRouter;