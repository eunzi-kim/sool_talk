import React from "react";
import { Link } from "react-router-dom";
import "./css//Home.css";

function Home() {
  return (
    <div className="home">
      <div className="random-card">
        <h1>"오늘 마실 소주를 내일로 미루지 말라"</h1>
      </div>
      <div className="random">
        <Link to="/ChatApp">
          <button className="random-btn">
            <h3>오늘의 술친구 구하기</h3>
            <h1>Touch!</h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
