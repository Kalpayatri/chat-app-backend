const mongoose=require('mongoose')
const Schema=mongoose.Schema

const chatRoomSchema=new Schema({
    members:{
        type:Array
    }
},{timestamps:true}
)

const ChatRoom=mongoose.model('ChatRoom',chatRoomSchema)
module.exports=ChatRoom