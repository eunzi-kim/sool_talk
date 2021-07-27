import React, { useState } from "react";
import axios from "axios";
import "./css/Signup.css";
import { Link } from "react-router-dom";

function Signup({ history }) {
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
      if (response.data === true) {
        goLoginPage()
      }
      else {
        if (document.querySelector(".password-alert-view")) {
          document.querySelector(".password-alert-view").className = "password-alert"
        }
        if (document.querySelector(".info-alert")) {
          document.querySelector(".info-alert").className = "info-alert-view"
        }
      } 
    })
    .catch(error => {
      if (document.querySelector(".password-alert-view")) {
        document.querySelector(".password-alert-view").className = "password-alert"
      }
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
    if (user.password !== user.passwordConfirmation) {
      if (document.querySelector(".info-alert-view")) {
        document.querySelector(".info-alert-view").className = "info-alert"
      }
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

  const { nickname, username, password, passwordConfirmation } = user;

  const iconArrow = "/img/icon_arrow.png";

  return (
    <div className="signup-box">
      <div className="password-alert">
        <h3>비밀번호를 확인해주세요.</h3>
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
