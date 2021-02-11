const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config/keys");
const monsoose = require("mongoose");
const User = monsoose.model("User");

module.exports= (req, res, next) =>{
const {authorizaston} =req.headers;
if(!authorizaston){
    return res.status(422).json({status:422, message:"You must be logged in"})
}
const token = authorizaston.replace("Bearer ", "");
jwt.verify(token, JWT_SECRET, (err, payload)=>{
    if(err){
        return res.status(401).json({status:401, message:"You must be logged in"})
    }
    const{_id} = payload;
    User.findById(_id).then(userdata=>{
        req.user = userdata;
        next();
    })
})
}

