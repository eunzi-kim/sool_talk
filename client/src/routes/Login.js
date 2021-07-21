import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <h1>로그인</h1>
      <div>
        <b>아이디</b> :{" "}
        <input
          name="username"
          value={username}
          onChange={changeLogin}
          placeholder="아이디를 입력하세요."
        ></input>
      </div>
      <div>
        <b>비밀번호</b> :{" "}
        <input
          name="password"
          value={password}
          onChange={changeLogin}
          placeholder="비밀번호를 입력하세요."
        ></input>
      </div>
      <Link to="/home">
        <button onClick={submitLogin}>로그인</button>
      </Link>
    </div>
  );
}

export default Login;
