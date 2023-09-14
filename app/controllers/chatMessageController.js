const ChatMessage=require('../models/chatMessageModel')
const io = require('socket.io')();
const chatMessageController={}

// Function to get all chat messages
chatMessageController.getChatMessageById = async (req, res) => {
  const messageId = req.params.id;
  console.log("Requested Chat Message ID:", messageId);

  try {
    const chatMessage = await ChatMessage.findById(messageId);
    if (!chatMessage) {
      return res.status(404).json({ error: "Chat message not found" });
    }
    res.status(200).json(chatMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch chat message" });
  }
};


 // Function to create a new chat message
chatMessageController.createChatMessage = async (req, res) => {
  const { sender, receiver, message } = req.body;
  if (!sender || !receiver || !message) {
    return res.status(400).json({ error: 'Sender, receiver, and message are required' });
  }

  try {
    // Create or retrieve a unique chat room identifier
    const chatRoomId = getChatRoomId(sender, receiver);

    // Create a new chat message with the chat room identifier
    const newChatMessage = await ChatMessage.create({
      sender,
      receiver,
      message,
      chatRoomId,
    });

    // Emit the new chat message to the appropriate chat room
    io.to(chatRoomId).emit('chat message', {
      chatRoomId,
      message: newChatMessage,
    });

    res.status(201).json(newChatMessage);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create chat message' });
  }
};

// Function to create or retrieve a unique chat room identifier
const getChatRoomId = (userId1, userId2) => {
  // You can implement your custom logic here to generate a unique chat room ID.
  // For example, you can sort the user IDs and concatenate them to form the chat room ID.
  return [userId1, userId2].sort().join('_');
};

module.exports=chatMessageController