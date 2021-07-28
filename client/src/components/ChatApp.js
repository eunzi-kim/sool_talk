import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import ChatInput from "./ChatInput";
import ChatView from "./ChatView";

// 새로운 웹소켓 하나 생성
let sockJS = new SockJS("http://localhost:8080/webSocket");
let stompClient = Stomp.over(sockJS);
stompClient.debug = (str) => {
  console.log(str);
};

const ChatAppProps = {
  roomId,
};

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

    // 구독하기
    stompClient.connect(headers, () => {
      stompClient.subscribe(`/topic/${roomId}`, (data) => {
        const revMsg = JSON.parse(data.body);
        setMsgs((prev) => [...prev, revMsg["msg"]]);
      });
    });
  }, []);

  const onInput = (msg) => {
    stompClient.send(`/hello/${roomId}`, {}, JSON.stringify(msg));
  };

  return (
    <>
      <ChatInput onInput={onInput} />
      <ChatView msgs={msgs} />
    </>
  );
}

export default ChatApp;
