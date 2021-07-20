import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/home">
        <button>우리로고</button>
      </Link>
      <Link to="/mypage">
        <button>마이페이지</button>
      </Link>
      <Link to="/search-friends">
        <button>친구찾기</button>
      </Link>
      <Link to="/articles">
        <button>건의게시판</button>
      </Link>
      <Link to="/setting">
        <button>환경설정</button>
      </Link>
      <Link to="/logout">
        <button>로그아웃</button>
      </Link>
    </div>
  );
}

export default Navigation;
