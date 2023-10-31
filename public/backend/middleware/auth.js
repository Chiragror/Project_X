import Jwt from "jsonwebtoken"; 
const authMiddleware= (req,res,next)=>{
    const token=req.header.authorization;
    try {
        const decoded = jwt.verfiy(token.split(' ')[1], process.env.)
        
    } catch (error) {
        
    }
}