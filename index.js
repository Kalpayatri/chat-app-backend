const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
const configureDB = require("./config/database");
const router = require("./config/routes");
const cors = require("cors");
const server = http.createServer(app); // Replace 'app' with your express app
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Replace with your frontend URL
    credentials: true,
  },
});

app.use(express.json());
app.use(cors());
configureDB();
app.use(router);

// io.on("connection", (socket) => {
//   console.log("A user connected");

//   // Handle specific WebSocket events here
//   socket.on("sendMessage", (data) => {
//     console.log("Received message:", data);
//     // Broadcast the message to all connected clients
//     io.emit("receiveMessage", data);
//   });

//   // Handle disconnection
//   socket.on("disconnect", () => {
//     console.log("A user disconnected");
//   });
// });

// Socket.IO connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Handle incoming chat messages
  socket.on('chat message', (data) => {
    // Broadcast the message to the appropriate chat room or user
    socket.broadcast.to(data.chatRoomId).emit('chat message', data.message);
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
