import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import ChatInput from "./ChatInput";
import ChatView from "./ChatView";

// 새로운 소켓 하나 생성
let sockJS = new SockJS("http://localhost:8080/webSocket");
// 클라이언트 생성
let stompClient = Stomp.over(sockJS);
// 콘솔에 메세지 띄움
stompClient.debug = (str) => {
  console.log("송신 중");
  console.log(str);
};

// const ChatAppProps = {
//   roomId,
// };

function ChatApp({ match }) {
  const { roomId } = match.params;
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    console.log(match);
    // jwt token은 임시로 발급받은거 직접 넣어줌
    let headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0Iiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNjI3MDQ1OTA5LCJleHAiOjE2MjcwNDk1MDl9.JYZ-f0kyz0CMGnTFor5LaxepcRPkhBHo5SUFItRYogg",
    };

    // 2. 채팅방 구독하기 (채팅방 입장)
    stompClient.connect(headers, () => {
      stompClient.subscribe(`/topic/1`, (data) => {
        const revMsg = JSON.parse(data.body);
        setMsgs((prev) => [...prev, revMsg["msg"]]);
      });
    });
  }, [msgs]);

  // 3. 메세지 송신하기 (send)
  // destination:/hello/방번호, msg: 송신한 메세지
  const onInput = (msg) => {
    console.log("송신 전");
    stompClient.send(`/hello/1`, {}, JSON.stringify(msg));
    console.log("송신 끝");
    setMsgs([...msgs, msg]);
  };

  return (
    <>
      <ChatView msgs={msgs} />
      <ChatInput onInput={onInput} />
    </>
  );
}

export default ChatApp;
