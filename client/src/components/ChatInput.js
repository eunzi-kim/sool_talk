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
    <>
      <input type="text" value={value} onChange={onChange} />
      <button
        onClick={(e) => {
          e.preventDefault();
          onInput(value);
          setValue("");
        }}
      >
        보내기
      </button>
    </>
  );
}

export default ChatInput;
