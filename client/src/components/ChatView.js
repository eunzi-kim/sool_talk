import React from "react";
import "./Chat.css";

// 이건 필요없지 않나?
// const ChatViewProps = {
//   msgs,
// };

// 실시간 채팅창
function ChatView({ msgs }) {
  let key = 0;

  return (
    <div className="chatting">
      {msgs.map((msg) => (
        <div key={key++}>{msg}</div>
      ))}
    </div>
  );
}

export default ChatView;
