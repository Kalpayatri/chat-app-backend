const express=require('express')
const router=express.Router()
const chatMessageController=require('../app/controllers/chatMessageController')
const chatRoomController=require('../app/controllers/chatRoomController')

router.post('api/chatMessage')

module.exports=router