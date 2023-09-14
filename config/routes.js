const express=require('express')
const router=express.Router()
const chatMessageController=require('../app/controllers/chatMessageController')
const chatRoomController=require('../app/controllers/chatRoomController')
const userController=require('../app/controllers/userController')

// Initialize chatMessages as an empty array
let chatMessages = [];

router.post('/users/register', userController.register)
router.post('/users/login', userController.login)

// Create a new chat message
router.post('/api/chat-messages', chatMessageController.createChatMessage);

// Get all chat messages
router.get('/api/chat-messages/:id', chatMessageController.getChatMessageById );

// Route to create a new chat room member
router.post('/api/chat-members', chatRoomController.createChatRoom);

// Get chat messages for a specific chat member
// router.get('/api/chat-messages/:chatRoomId', chatRoomController.getChatMessagesForChatMember);
router.get("/api/chat-members/:id", chatRoomController.getChatRoomOfUser );

router.get('/api/users', userController.getAllUsers);



module.exports=router