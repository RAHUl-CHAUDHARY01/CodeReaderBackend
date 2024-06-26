var jwt = require('jsonwebtoken');
const JWT_SECRET= 'Rahulchaudhary$$';

const fetchuser= (req,res,next)=>{
    //Get the user from the jwt token and add id to req object
    const token= req.header('auth-token');
    if(!token){
        res.status(401).send({error:"please authenticate using a valid token"}) // blank token
    } 
    console.log(token)
    try {
        const data = jwt.verify(token,JWT_SECRET);
        console.log(data)
        req.user = data.user;
    next();

    } catch (error) {
        res.status(401).send({error:"please authenticate using a valid token"})
    }
   
}
module.exports = fetchuser;