import React from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

function Chat() {
  return (
    <div className="chat-box">
      <div className="chat-header">
        <div>
          <h1>채팅</h1>
        </div>
        <div className="chat-exit">
          <Link to="/">
            <button className="chat-exit-btn">나가기</button>
          </Link>
        </div>        
      </div>     
      <div className="chat-body">
        <div className="chat-1">
          <div className="opponent-screen">
            <h3>상대방 화면</h3>
          </div>
          <div className="chat-btns">
            <div>
              <button className="chat-btn">1</button>
            </div>
            <div>
              <button className="chat-btn">2</button>
            </div>
            <div>
              <button className="chat-btn">3</button>
            </div>
          </div>
        </div>
        <div className="chat-2">
          <div className="my-screen">
            <h3>내 화면</h3>
          </div>
          <div className="chat-screen">
            <h3>채팅창</h3>
          </div>
        </div>   
      </div>
         
    </div>
  )
}

export default Chat;