const ChatRoom=require('../models/chatRoomModel')
const chatRoomController={}

chatRoomController.createChatRoom = async (req, res) => {
  const newChatRoom = new ChatRoom({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    await newChatRoom.save();
    res.status(201).json(newChatRoom);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};

chatRoomController.getChatRoomOfUser = async (req, res) => {
  const userId = req.params.id;

  try {
    // Find the chat room(s) that contain the specified user ID in the members array
    const chatRooms = await ChatRoom.find({
      members: { $in: [userId] },
    });

    res.status(200).json(chatRooms);
  } catch (error) {
    console.error('Error fetching chat room:', error);
    res.status(500).json({ error: 'Failed to fetch chat room' });
  }
};

module.exports=chatRoomController