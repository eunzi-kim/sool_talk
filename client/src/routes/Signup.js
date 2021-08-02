import React, { useState } from "react";
import axios from "axios";
import "./css/Signup.css";
// import { Link } from "react-router-dom";

function Signup({ history }) {
  // 경고창 중복 없애기
  const alertCheck = () => {
    if (document.querySelector(".password-alert-view")) {
      document.querySelector(".password-alert-view").className = "password-alert"
    }
    if (document.querySelector(".nickname-alert-view")) {
      document.querySelector(".nickname-alert-view").className = "nickname-alert"
    }
    if (document.querySelector(".info-alert-view")) {
      document.querySelector(".info-alert-view").className = "info-alert"
    }
    if (document.querySelector(".username-alert-view")) {
      document.querySelector(".username-alert-view").className = "username-alert"
    }
    if (document.querySelector(".length-alert-view")) {
      document.querySelector(".length-alert-view").className = "length-alert"
    }
  }

  const fetchSignup = async ( userInfo ) => {
    let config = {
      headers:{
        "Content-Type": "application/json"
      }
    }
    const url = "http://localhost:8080/user/signup/"
    const data = userInfo
  
    await axios.post(url, data, config)
    .then(response => {
      // 로그인 성공
      if (response.data === "success") {
        goLoginPage()
      }
      // 아이디 중복
      else if (response.data === "username") {
        alertCheck()
        if (document.querySelector(".username-alert")) {
          document.querySelector(".username-alert").className = "username-alert-view"
        }
      }
      // 닉네임 중복
      else if (response.data === "nickname") {
        alertCheck()
        if (document.querySelector(".nickname-alert")) {
          document.querySelector(".nickname-alert").className = "nickname-alert-view"
        }
      }
      // 실패
      else {
        alertCheck()
        if (document.querySelector(".info-alert")) {
          document.querySelector(".info-alert").className = "info-alert-view"
        }
      } 
    })
    // 에러 발생 => 회원가입 실패
    .catch(error => {
      alertCheck()
      if (document.querySelector(".info-alert")) {
        document.querySelector(".info-alert").className = "info-alert-view"
      }
    })
  }

  const [user, setUser] = useState({
    nickname: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  const changeSignup = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitSignup = () => {
    if (user.nickname.length === 0 || user.nickname.length === 0 || user.password.length === 0 || user.passwordConfirmation.length === 0) {
      alertCheck()
      if (document.querySelector(".length-alert")) {
        document.querySelector(".length-alert").className = "length-alert-view"
      }
    }
    else if (user.password !== user.passwordConfirmation) {
      alertCheck()
      if (document.querySelector(".password-alert")) {
        document.querySelector(".password-alert").className = "password-alert-view"
      }
    } else {
      const userInfo = {
        "username": user.username,
        "password": String(user.password),
        "nickname": user.nickname
      }
      fetchSignup(userInfo)
    }
  };

  const goLoginPage = () => {
    history.push("/login");
  };

  document.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      submitSignup()
    }
  })

  const { nickname, username, password, passwordConfirmation } = user;

  const iconArrow = "/img/icon_arrow.png";

  return (
    <div className="signup-box">
      <div className="length-alert">
        <h3>정보를 모두 입력해 주세요.</h3>
      </div>
      <div className="password-alert">
        <h3>비밀번호를 확인해 주세요.</h3>
      </div>
      <div className="username-alert">
        <h3>동일한 아이디가 존재합니다.</h3>
      </div>
      <div className="nickname-alert">
        <h3>동일한 닉네임이 존재합니다.</h3>
      </div>
      <div className="info-alert">
        <h3>회원가입에 실패하였습니다.</h3>
      </div>
      <div className="signup-form">
        <div>
          <div className="arrow">
            <img
              src={iconArrow}
              alt="화살표"
              className="icon-arrow"
              style={{ cursor: "pointer" }}
              onClick={goLoginPage}
            />
          </div>
          <div className="signup-label">
            <h1>회원가입</h1>
          </div>
        </div>

        <div className="nickname">
          <b>닉네임</b>{" "}
          <input
            className="form-input"
            name="nickname"
            value={nickname}
            onChange={changeSignup}
            placeholder="닉네임을 입력하세요."
          ></input>
        </div>
        <div className="username">
          <b>아이디</b>{" "}
          <input
            className="form-input"
            name="username"
            value={username}
            onChange={changeSignup}
            placeholder="아이디를 입력하세요."
          ></input>
        </div>
        <div className="password">
          <b>비밀번호</b>{" "}
          <input
            className="form-input"
            name="password"
            value={password}
            onChange={changeSignup}
            placeholder="비밀번호를 입력하세요."
            type="password"
          ></input>
        </div>
        <div className="password-confirm">
          <b>비밀번호 확인</b>{" "}
          <input
            className="form-input"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={changeSignup}
            placeholder="비밀번호를 다시 입력하세요."
            type="password"
          ></input>
        </div>
        <div>
          <button onClick={submitSignup} className="signup-btn">
            <h3>회원가입</h3>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
