const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true,
    },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
});

mongoose.model("Post", postSchema);


