import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="container">
      <div className="logo">
        <Link to="/">
          <button>우리로고</button>
        </Link>
      </div>
      <div className="content">
        <div className="categories">
          <div className="mypage category">
            <Link to="/mypage">
              <button className="category-btn">마이페이지</button>
            </Link>
          </div>
          <div className="search-friends category">
            <Link to="/search-friends">
              <button className="category-btn">친구찾기</button>
            </Link>
          </div>
          <div className="articles category">
            <Link to="/articles">
              <button className="category-btn">건의게시판</button>
            </Link>
          </div>
          <div className="setting category">
            <Link to="/setting">
              <button className="category-btn">환경설정</button>
            </Link>
          </div>
        </div>       
        <div className="logout">
          <Link to="/logout">
            <button className="logout-btn">로그아웃</button>
          </Link>
        </div> 
      </div>     
    </div>
  );
}

export default Navigation;
