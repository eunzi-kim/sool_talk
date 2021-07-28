import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav-container">
      <div className="logo">
        <NavLink to="/">
          <button>우리로고</button>
        </NavLink>
      </div>
      <div className="content">
        <div className="categories">
          <div className="mypage category">
            <NavLink to="/mypage" activeClassName="selected">
              <button className="category-btn">마이페이지</button>
            </NavLink>
          </div>
          <div className="search-friends category">
            <NavLink to="/search-friends" activeClassName="selected">
              <button className="category-btn">친구찾기</button>
            </NavLink>
          </div>
          <div className="articles category">
            <NavLink to="/articles" activeClassName="selected">
              <button className="category-btn">건의게시판</button>
            </NavLink>
          </div>
          <div className="setting category">
            <NavLink to="/setting" activeClassName="selected">
              <button className="category-btn">환경설정</button>
            </NavLink>
          </div>
        </div>       
        <div className="logout">
          <NavLink to="/logout">
            <button className="logout-btn">로그아웃</button>
          </NavLink>
        </div> 
      </div>     
    </div>
  );
}

export default Navigation;
