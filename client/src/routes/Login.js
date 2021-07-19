import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>로그인</h1>
      <div>
        <b>아이디</b> : <input placeholder="아이디를 입력하세요."></input>
      </div>
      <div>
        <b>비밀번호</b> : <input placeholder="아이디를 입력하세요."></input>
      </div>
      <Link to="/Home">
        <button>로그인</button>
      </Link>
    </div>
  );
}

export default Login;
