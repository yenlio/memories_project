const mongoose= require('mongoose');
const {model,Schema}=mongoose


var postSchema=new Schema({
    title:String,
    message:String,
    creator:String,
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createAt:{
        type:Date,
        default:new Date()
    }

})
module.exports =model("postMessage",postSchema)
