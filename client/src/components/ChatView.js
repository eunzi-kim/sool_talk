import React from "react";
import "./Chat.css";

import jquery from "jquery";
import $ from "jquery";

// 이건 필요없지 않나?
// const ChatViewProps = {
//   msgs,
// };

// 실시간 채팅창
function ChatView({ msgs }) {
  const currentUser = localStorage.getItem("user");

  var chatView = [];
  msgs.map((chat) => {
    var nickname = chat["nickname"];
    var content = chat["content"];
    if (nickname === currentUser) {
      chatView.push(`${nickname}(나): ${content}`);
    } else {
      chatView.push(`${nickname}: ${content}`);
    }
  });

  let key = 0;

  $(document).ready(function () {
    if ($(".chatting").length) {
      var scroll_h = $(".chatting")[0].scrollHeight;
      $(".chatting").scrollTop(scroll_h);
      console.log($(".chatting"));
    }
  });

  return (
    <div className="chatting">
      {chatView.map((msg) => (
        <div key={key++}>{msg}</div>
      ))}
    </div>
  );
}

export default ChatView;
