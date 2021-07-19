import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/home">우리로고</Link>
      <Link to="/mypage">마이페이지</Link>
      <Link to="/search-friends">친구 찾기</Link>
      <Link to="/articles">건의게시판</Link>
      <Link to="/setting">환경설정</Link>
      <Link to="/logout">로그아웃</Link>
    </div>
  );
}

export default Navigation;
