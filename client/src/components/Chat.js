import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */
/* 이 코드는 잠시 보류합니다 */

function Chat() {
  // // 채팅 인풋의 상태관리 훅
  // const [chatContent, setChatContent] = useState("");

  // // 채팅 입력 시마다 값을 바꿔주는 함수
  // const changeChatInput = (e) => {
  //   const { value } = e.target;
  //   setChatContent(value);
  //   console.log(chatContent);
  // };

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
            <div className="chatting"></div>
            <div className="chat-send">
              <input
                name="chatContent"
                placeholder="채팅을 입력하세요."
                className="chat-input"
              />
              <button>보내기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
