const mongoose=require('mongoose')
const Schema=mongoose.Schema

const chatMessageSchema= new Schema({
    chatRoomId:{
        type:String
    },
    sender:{
        type:String
    },
    message:{
        type:String
    },
},{timestamps:true})

const ChatMessage= mongoose.model('ChatMessage',chatMessageSchema)
module.exports=ChatMessage