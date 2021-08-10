import React from "react";
// import Cookies from "js-cookie";
import "./css/Mypage.css";

function Mypage() {
  const imgProfile =
    "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F990FCD335A1D68190E36F5";
  const iconHeart = "/img/icon_heart.png";

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  var gender = "여"
  if (userInfo.sex === "male") {
    gender = "남"
  }

  return (
    <div className="my-info">
      <div className="mp-nickname">
        <h1>{userInfo.nickname}</h1>
        <h2>님 🍻</h2>
      </div>
      <div className="user_mid">
        <img src={imgProfile} alt="{유저네임}" className="image_p" />
        <div className="like">
          <img src={iconHeart} alt="좋아요" className="icon_heart" />
          <b>{userInfo.likes}</b>
        </div>
      </div>
      <div className="my-bottom">
        <h3>지역: {userInfo.address} | 성별: {gender} | 나이: {userInfo.age}세</h3>
      </div>
    </div>
  );
}

export default Mypage;
