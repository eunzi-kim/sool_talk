import axios from "axios";
import React, { useState } from "react";
import DaumPostCode from 'react-daum-postcode';
import "./css/Mypage.css";

function MypageUpdate() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  console.log(userInfo)

  var imgProfile =
    "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F990FCD335A1D68190E36F5";
  
  if (userInfo.profileImg) {
    imgProfile = userInfo.profileImg
  }

  var gender = "여"
  if (userInfo.sex === "male") {
    gender = "남"
  }

  const fetchUserUpdate = async ( userInfo ) => {
    let config = {
      headers:{
        "content-type": "multipart/form-data"
      }
    }
    const url = "http://localhost:8080/user/userupdate"
    const data = userInfo

    await axios.post(url, data, config)
    .then(res => {
      console.log("성공")
      alert("회원정보 수정 성공")
      // window.location.replace("/mypage");
    })
    .catch(err => {
      console.log("실패")
    })
  }

  const [user, setUser] = useState({
    address: userInfo.address,
    age: userInfo.age,
    imageUrl: userInfo.imgProfile
  });

  const onMpUpdateEnd = () => {
    if (user.age < 19 || user.age > 87) {
      alert("죄송합니다. 불가능한 나이입니다.")
    } else {
      const formData = new FormData()
      formData.append("imageUrl", user.imageUrl)
      formData.append("address", user.address)
      formData.append("age", user.age)
      formData.append("id", userInfo.id)
      formData.append("nickname", userInfo.nickname)
      formData.append("email", userInfo.email)

      // for (let value of formData.values()) {
      //   console.log(value);
      // }
      // console.log(formData)
      fetchUserUpdate(formData)
    }
  }

  const changeAge = (e) => {
    user.age = e.target.value
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

  // 이미지
  const [imgBase64, setImgBase64] = useState(imgProfile); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일	
  
  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
    user.imageUrl = event.target.files[0]
  }

  const onMpUpdateCancle = () => {
    window.location.replace("/mypage");
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
          <div className="mp-tt">
            <button onClick={onMpUpdateEnd}><h3>수정완료</h3></button>
            <button onClick={onMpUpdateCancle}><h3>수정취소</h3></button>
          </div>
        </div>
        <div className="user_mid-up">
          <img src={imgBase64} alt="{유저네임}" className="image_p" />
          <div className="up-image">
            <input 
              type="file"
              name="imgFile" 
              id="imgFile"
              onChange={handleChangeFile}
            />
          </div>
        </div>
        <div className="my-up-bottom">
          <h3>지역: </h3>
          <input 
            type="text"
            value={user.address} 
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
            defaultValue={user.age} 
            min="19"
            max="87"
            className="mp-up-age"
            onChange={changeAge}
          /> 
          <h3>세</h3>
        </div>
      </div>
    </div>
  );
}

export default MypageUpdate;
