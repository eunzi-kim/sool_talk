import React from "react";
import "./css/Mypage.css";

function Mypage() {
  const imgProfile = "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F990FCD335A1D68190E36F5"
  const iconHeart = "/img/icon_heart.png"

  return (
    <div className="my-info">
      <div className="mp-nickname">
        <h1>폭간고말이</h1>
        <h2>님 🍻</h2>
      </div>
      <div className="user_mid">
        <img src={imgProfile} alt="{유저네임}" className="image_p"/>
        <div className="like">
          <img src={iconHeart} alt="좋아요" className="icon_heart"/>
          <b>{345}</b>
        </div>        
      </div>
      <div className="my-bottom">              
        <h3>지역: 광주 북구 | 성별: 여 | 나이: 27세</h3>
      </div>
    </div>
  );
}

export default Mypage;
