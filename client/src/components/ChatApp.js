import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import ChatInput from "./ChatInput";
import ChatView from "./ChatView";
import "./Chat.css";

// 새로운 웹소켓 하나 생성
let sockJS = new SockJS("http://localhost:8080/webSocket");
let stompClient = Stomp.over(sockJS);
stompClient.debug = (str) => {
  console.log(str);
};

// const ChatAppProps = {
//   roomId,
// };

function ChatApp({ match }) {
  // const { roomId } = match.params;
  const roomId = 1;
  const [msgs, setMsgs] = useState([]);

  const user = localStorage.getItem("user");
  console.log(user);

  useEffect(() => {
    console.log(match);
    // jwt token은 임시로 발급받은거 직접 넣어줌
    let headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNjI3MDQ1OTA5LCJleHAiOjE2MjcwNDk1MDl9.JYZ-f0kyz0CMGnTFor5LaxepcRPkhBHo5SUFItRYogg",
    };

    // 2. 채팅방 구독하기 (채팅방 입장)
    stompClient.connect(headers, () => {
      stompClient.subscribe(`/topic/${roomId}`, (data) => {
        const revMsg = JSON.parse(data.body);
        console.log(revMsg)
        setMsgs((prev) => [...prev, {
          roomId: revMsg['roomId'],
          nickname: revMsg['nickname'],
          content: revMsg['content']
        }]);
      });
    });
  }, []);

  // 3. 메세지 송신하기 (send)
  const onInput = (msg) => {
    const chatData = {
      roomId: 1, // 변경 필요
      nickname: user,
      content: msg
    }
    stompClient.send(
      `/hello`,
      {},
      JSON.stringify(chatData)
    );
  };
  /* <h3>채팅창</h3>
    <div className="chatting"></div>
    <div className="chat-send">
      <input
        name="chatContent"
        placeholder="채팅을 입력하세요."
        className="chat-input"
      />
      <button>보내기</button>
    </div> */
  return (
    <>
      <ChatView msgs={msgs} />
      <ChatInput onInput={onInput} />
    </>
  );
}

export default ChatApp;
