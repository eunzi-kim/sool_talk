import React from "react";

// 이건 필요없지 않나?
// const ChatViewProps = {
//   msgs,
// };

// 실시간 채팅창
function ChatView({ msgs }) {
  let key = 0;

  return (
    <div class="chat-screen">
      {msgs.map((msg) => (
        <div key={key++}>{msg}</div>
      ))}
    </div>
  );
}

export default ChatView;
