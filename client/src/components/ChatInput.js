import React, { useState } from "react";

// onInput 함수가 msg를 저장
type ChatInputProps = {
  onInput: (msg) => void,
};

function ChatInput({ onInput }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="chat-send">
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={{ width: "17.5rem" }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          onInput(value);
          setValue("");
        }}
      >
        보내기
      </button>
    </div>
  );
}

export default ChatInput;
