import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Login.css";
// import Cookies from "js-cookie";

// 유저가 입력한 아이디와 비밀번호를 서버로 보내주고 그 결과값을 받는 함수 (33번째 줄 참고)
const signIn = async ({ username, password }) => {
  // console.log(username, password);

  // username(아이디)과 password를 서버로 넘긴다.
  const { data } = await axios.post("http://localhost:8080/user/signin", {
    username: username,
    password: password,
  });
  // 받아오는 (return) 데이터에는 success(로그인 성공 여부)와 token 값이 들어있음. (32번째 줄로..)
  return data;
};

function Login({ history }) {
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

  const { username, password } = user;

  // 유저가 (아이디와 비밀번호를 입력하고) 로그인 버튼을 눌렀을 때, 아래 함수 실행!
  const submitLogin = async ({ username, password }) => {
    const { success, token, nickname } = await signIn({ username, password });

    // 만약 로그인 성공 시 (success = true),
    if (success) {
      // 토큰값을 받아 세션을 생성하고 쿠키에 저장한다. => session: <토큰값>
      // Cookies.set("session", token);
      localStorage.setItem("token", token);
      localStorage.setItem("user", nickname);

      // 마이페이지로 이동
      history.push("/mypage");
    }
  };

  const imgKakao = "/img/logo_kakao.svg";
  const imgInsta = "/img/logo_instagram.svg";
  const imgGoogle = "/img/logo_google.png";

  return (
    <div className="login">
      <div className="login-box">
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
          <button onClick={() => submitLogin(user)} className="login-btn">
            <h3>로그인</h3>
          </button>
        </div>
        <div className="login-bottom">
          <div className="social">
            <img src={imgKakao} className="logo-img" alt="Kakao" />
            <img src={imgInsta} className="logo-img" alt="Instagram" />
            <img src={imgGoogle} className="logo-img" alt="Google" />
          </div>
          <div className="signup-link">
            <Link to="/signup">
              <p>신규 회원 가입</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
