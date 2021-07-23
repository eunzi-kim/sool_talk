import React from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import "./css/Signup.css";

export const Register = (props) => {

}

const iconArrow = "/img/icon_arrow.png"

function Signup() {
  return (
    <form className="signup">
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
            placeholder="닉네임을 입력하세요."
          ></input>
        </div>
        <div className="username">
          <b>아이디</b> {" "}
          <input
            className="form-input"
            name="username"
            placeholder="아이디를 입력하세요."
          ></input>
        </div>
        <div className="password">
          <b>비밀번호</b> {" "}
          <input
            className="form-input"
            name="password"
            placeholder="비밀번호를 입력하세요."
          ></input>
        </div>
        <div className="password-confirm">
          <b>비밀번호 확인</b> {" "}
          <input
            className="form-input"
            name="password-confirmation"
            placeholder="비밀번호를 다시 입력하세요."
          ></input>
        </div>    
        <div>
          <button className="signup-btn">
            <h3>회원가입</h3>
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup;