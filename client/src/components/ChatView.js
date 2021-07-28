import React from "react";

const ChatViewProps = {
  msgs,
};

function ChatView({ msgs }) {
  let key = 0;

  return (
    <>
      {msgs.map((msg) => (
        <div key={key++}>{msg}</div>
      ))}
    </>
  );
}

export default ChatView;
