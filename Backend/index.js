const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
require("dotenv").config();
const port = process.env.port;

const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/user.routes");
const { bookRouter } = require("./Routes/book.router");

app.use(express.json());
app.use(cors());

const users = [{}];

const server = http.createServer(app);

const io = socketIO(server);

app.use(express.json());
app.use("/books", bookRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

io.on("connection", (socket) => {
  console.log("New Connection");

  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(`${user} has joined `);
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: ` ${users[socket.id]} has joined`,
    });
    socket.emit("welcome", {
      user: "Admin",
      message: `Welcome to the chat,${users[socket.id]} `,
    });
  });

  socket.on("message", ({ message, id }) => {
    io.emit("sendMessage", { user: users[id], message, id });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("leave", {
      user: "Admin",
      message: `${users[socket.id]}  has left`,
    });
    console.log(`user left`);
  });
});

server.listen(port, async (req, res) => {
  try {
    await connection;
    console.log("Connected to db");
  } catch (err) {
    console.log(err);
  }
  console.log(`Running on port ${port}`);
});
