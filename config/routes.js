const express=require('express')
const router=express.Router()
const chatMessageController=require('../app/controllers/chatMessageController')
const chatRoomController=require('../app/controllers/chatRoomController')
const userController=require('../app/controllers/userController')

router.post('/users/register', userController.register)
router.post('/users/login', userController.login)

module.exports=router