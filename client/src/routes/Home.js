import React from "react";
import { Link } from "react-router-dom";
import "./css//Home.css";

const onClick = () => {
  window.location.replace("/chat");
};

function Home() {
  return (
    <div className="home">
      <div className="random-card">
        <h1>"세상에서 제일 귀여운 사람은? 엄원상"</h1>
      </div>
      <div className="random">
        <button onClick={onClick} className="random-btn">
          <h3>오늘의 술친구 구하기</h3>
          <h1>Touch!</h1>
        </button>
      </div>
    </div>
  );
}

export default Home;
