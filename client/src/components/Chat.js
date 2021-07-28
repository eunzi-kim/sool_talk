import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Chat.css";

function Chat() {
  const roomNo = 1;

  // 채팅 인풋의 상태관리 훅
  const [chatContent, setChatContent] = useState("");

  // 채팅 입력 시마다 값을 바꿔주는 함수
  const changeChatInput = (e) => {
    const { value } = e.target;
    setChatContent(value);
    console.log(chatContent);
  };

  // 서버로부터 채팅 리스트 가져오는 함수
  const getChatData = async (chatContent) => {
    // (아직 정확한 url 모르지만) 입력한 내용을 폼데이터로 서버에 전송
    const data = await axios.post("http://localhost:8080/chat", {
      chatContent,
      roomNo,
    });

    // 방금 입력한 채팅을 포함한 전체 채팅 리스트 반환
    /* ex) 
    [
      {username: tason, chatContent: '하우얼유두잉?', time: 21-07-28-11:14},
      {username: ji, chatContent: '더바빠..', time: 21-07-28-11:14},
      {username: tason, chatContent: '파이링', time: 21-07-28-11:15},
      {username: ji, chatContent: '땡큐', time: 21-07-28-11:16},
    ] */
    return data;
  };

  // 전송 버튼 누르면 실행되는 함수
  const submitChat = async (chatContent) => {
    const chatList = await getChatData(chatContent);
  };

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
                value={chatContent}
                placeholder="채팅을 입력하세요."
                className="chat-input"
                onChange={changeChatInput}
              />
              <button onClick={submitChat}>보내기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
