import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Chat.css";
import ChatApp from "./ChatApp";
import MyScreen from "./MyScreen";
import OppScreen from "./OppScreen";
import { useDispatch } from "react-redux";
import { deleteMessages } from "../modules/chatting";

function Chat() {
  const dispatch = useDispatch();
  const onDeleteMessages = () => dispatch(deleteMessages());

  return (
    <div className="chat-box">
      {/* <div className="chat-header">
        <div className="chat-exit">
          <Link to="/">
            <button className="chat-exit-btn">나가기</button>
          </Link>
        </div>
      </div> */}
      <div className="chat-body">
        <div className="chat-1">
          <div className="opponent-screen">
            <OppScreen />
          </div>
          <div className="chat-btns">
            <div>
              <button className="chat-btn">기능(1)</button>
            </div>
            <div>
              <button className="chat-btn">기능(2)</button>
            </div>
            <div>
              <button className="chat-btn">기능(3)</button>
            </div>
          </div>
        </div>
        <div className="chat-2">
          <a href="/" onClick={onDeleteMessages}>
            <button className="chat-exit-btn">나가기</button>
          </a>
          <div className="my-screen">
            <MyScreen />
          </div>
          <div className="chat-screen">
            <ChatApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
