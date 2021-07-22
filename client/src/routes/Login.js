import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";

const fetchLogin = async ({ username, password }) => {
  const response = await axios("http://localhost:4000/users");

  const users = response.data;
  console.log(users);
  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    console.log("게정 없거나 비밀번호 틀림!!!!!");
  } else {
    console.log("로그인 성공");
  }
};

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const changeLogin = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const submitLogin = () => {
    fetchLogin(user);
  };

  const { username, password } = user;

  const imgKakao = "/img/logo_kakao.svg"
  const imgInsta = "/img/logo_instagram.svg"
  const imgGoogle = "/img/logo_google.png"

  return (
    <div className="login">
      <div>
        <h1>로그인</h1>
      </div>      
      <div>
        <b>아이디</b> :{" "}
        <input
          className="form-input"
          name="username"
          value={username}
          onChange={changeLogin}
          placeholder="아이디를 입력하세요."
        ></input>
      </div>
      <div>
        <b>비밀번호</b> :{" "}
        <input
          className="form-input"
          name="password"
          value={password}
          onChange={changeLogin}
          placeholder="비밀번호를 입력하세요."
        ></input>
      </div>
      <div>
        <Link to="/">
          <button onClick={submitLogin} className="login-btn">
            <h3>로그인</h3>
          </button>
        </Link>
      </div>
      <div className="login-bottom">
        <div className="social">
          <img src={imgKakao} className="logo-img" alt="Kakao" />
          <img src={imgInsta} className="logo-img" alt="Instagram" />
          <img src={imgGoogle}className="logo-img" alt="Google" />
        </div>
        <div className="signup-link">
          <Link to="/signup">
            <p>신규 회원 가입</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
