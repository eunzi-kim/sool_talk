import React from "react";
import Button from 'react-bootstrap/Button';
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <div className="random-card">
        <h1>"오늘 마실 소주를 내일로 미루지 말라"</h1>
      </div>
      <div className="random">
        <Button variant="success" className="random-btn">
          <h3>오늘의 술친구 구하기</h3>
          <h1>Touch!</h1>
        </Button>{' '}
      </div>
    </div>
  );
}

export default Home;
