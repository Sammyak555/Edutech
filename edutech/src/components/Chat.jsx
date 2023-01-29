import { useEffect, useRef, useState } from "react";
// import { user } from "./Join";
import socketIo from "socket.io-client";
import { BiSend } from 'react-icons/bi'


import sendLogo from "../images/send.png";
import Message from "./Message";

import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../images/closeIcon.png";

import { useSelector } from "react-redux";
import { Box, Button, Modal,Icon, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
let socket;
const ENDPOINT = "http://localhost:4002/";

const Chat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef(null)
  const { loginSuccess } = useSelector((store) => store.Authentication);
  const name = loginSuccess.name;
  let user = name || "User";
  const [id, setid] = useState(""); 
  const [messages, setMessages] = useState([]);

  const send = () => {
    const message = document.getElementById("chatInput").value;
    socket.emit("message", { message, id });
    document.getElementById("chatInput").value = "";
  };

  console.log(messages);
  useEffect(() => {
    socket = socketIo(ENDPOINT, { transports: ["websocket"] });

    socket.on("connect", () => {
      setid(socket.id);
    });
    console.log(socket);
    socket.emit("joined", { user });

    socket.on("welcome", (data) => {
      console.log(data);
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    socket.on("userJoined", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message, "the chat");
    });

    socket.on("leave", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message);
    });

    return () => {
      socket.emit("disconnected");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      setMessages([...messages, data]);
      console.log(data.user, data.message, data.id);
    });

    return () => {
      socket.off();
    };
  }, [messages]);

  return (
    <>
    <Box ref={finalRef} tabIndex={-1} aria-label='Focus moved to this box'>
       
      </Box>

      <Button mt={4} onClick={onOpen}>
       You have any Doubt?
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div className="chatPage">
      <div className="chatContainer">
        <ReactScrollToBottom className="chatBox">
          {messages.map((item, i) => (
            <Message
              user={item.id === id ? "" : item.user}
              message={item.message}
              classs={item.id === id ? "right" : "left"}
            />
          ))}
        </ReactScrollToBottom>
        <div className="inputBox">
          <input
            onKeyPress={(event) => (event.key === "Enter" ? send() : null)}
            type="text"
            id="chatInput"
          />
          <button onClick={send} className="sendBtn">
          Send<Icon as={BiSend} marginBottom={'-3px'} marginLeft={'4px'}/>
          </button>
        </div>
      </div>
    </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Chat;
