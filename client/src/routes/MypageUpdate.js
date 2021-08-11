import React, { useState } from "react";
import DaumPostCode from 'react-daum-postcode';
import "./css/Mypage.css";

function MypageUpdate() {
  const imgProfile =
    "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F990FCD335A1D68190E36F5";
  const iconHeart = "/img/icon_heart.png";

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  var gender = "여"
  if (userInfo.sex === "male") {
    gender = "남"
  }

  const [user, setUser] = useState({
    address: "",
    age: "",
    imageUrl: "" 
  });

  const onMpUpdateEnd = () => {
    window.location.replace("/mypage");
  }

  // 모달
  const modalOpen = () => {
    if (document.querySelector(".modal-addr-no")) {
      document.querySelector(".modal-addr-no").className = "modal"
    } 
  }

  const modalClose = () => {
    if (document.querySelector(".modal")) {
      document.querySelector(".modal").className = "modal-addr-no"
    } 
  }

  // 주소
  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    if (data.addressType === 'R') {
        if (data.bname !== '') {
            extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
      }
      var splitAddress = fullAddress.split(" ")
      user.address = splitAddress[0] + " " + splitAddress[1]
      document.querySelector(".mp-up-add").value = user.address   
      modalClose()
  }

  return (
    <div>
      <div className="mp-update-bg">
        <div className="mp-update-title">
          <h1>회원정보 수정✍</h1>
        </div>
      </div>
      <div className="my-update-info">
        <div className="mp-top">
          <div className="mp-tt"></div>
          <div className="mp-nickname">
            <h1>{userInfo.nickname}</h1>
            <h2>님 🍻</h2>
          </div>
          <div className="mp-tt"><button onClick={onMpUpdateEnd}><h3>수정완료</h3></button></div>
        </div>
        <div className="user_mid-up">
          <img src={imgProfile} alt="{유저네임}" className="image_p" />
          <div className="up-image">
            <input 
              type="file"
            />
          </div>
        </div>
        <div className="my-up-bottom">
          <h3>지역: </h3>
          <input 
            type="text"
            value={userInfo.address} 
            className="mp-up-add"
            readOnly
          />
          <button onClick={modalOpen}>지역 변경</button>
          <div className="modal-addr-no">
            <div className="modal-body">
              <div className="modal-close">
                <button onClick={modalClose}>
                  <h3>❌</h3>
                </button>
              </div>
              <div className="modal-title">
                <h3>📫 주소검색</h3>
              </div>
              <DaumPostCode 
                onComplete={handleComplete} 
              />
            </div>
          </div>
          <h3>| 성별: {gender} | 나이: </h3>            
          <input 
            type="number"
            placeholder={userInfo.age} 
            min="19"
            max="87"
            className="mp-up-age"
          /> 
          <h3>세</h3>
        </div>
      </div>
    </div>
  );
}

export default MypageUpdate;
