import React, { useState } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "./css/Signup.css";

// const fetchSignup = async ({ nickname, username, password, passwordConfirmation }) => {
//   const response = await axios("http://localhost:4000/users");

//   const users = response.data;
//   console.log(users);
// }

function Signup() {
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
    console.log(user)
    // fetchSignup(user)
  }

  const { nickname, username, password, passwordConfirmation } = user;

  const iconArrow = "/img/icon_arrow.png"
  
  return (
    <form className="signup-form">
      <div className="signup-box">
        <div>
          <div className="arrow">
            <Link to="/login">
              <img src={iconArrow} alt="화살표" className="icon-arrow" />
            </Link>
          </div>
          <div className="signup-label">
            <h1>회원가입</h1>
          </div>
        </div>
        
        <div className="nickname">
          <b>닉네임</b> {" "}
          <input
            className="form-input"
            name="nickname"
            value={nickname}
            onChange={changeSignup}
            placeholder="닉네임을 입력하세요."
          ></input>
        </div>
        <div className="username">
          <b>아이디</b> {" "}
          <input
            className="form-input"
            name="username"
            value={username}
            onChange={changeSignup}
            placeholder="아이디를 입력하세요."
            type="email"
          ></input>
        </div>
        <div className="password">
          <b>비밀번호</b> {" "}
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
          <b>비밀번호 확인</b> {" "}
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
    </form>
  );
}

export default Signup;