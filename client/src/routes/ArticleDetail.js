import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/ArticleDetail.css";

function ArticleDetail({ location }) {
  const { state } = location;
  console.log(state);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [board, setBoard] = useState({
    BOARD_TYPE: "",
    BOARD_TITLE: "",
    BOARD_CONTENT: "",
    BOARD_CNT: 0,
    BOARD_USER: userInfo.nickname,
    BOARD_YMD: ""
  });

  useEffect(() => {
    setBoard({
      ...board,
      BOARD_NO: state["board_NO"],
      BOARD_TYPE: state["board_TYPE"],
      BOARD_TITLE: state["board_TITLE"],
      BOARD_CONTENT: state["board_CONTENT"],
      BOARD_CNT: state["board_CNT"],
      BOARD_USER: state["board_USER"],
      BOARD_YMD: state["board_YMD"],
    });
  }, []);

  if (userInfo.nickname !== board.BOARD_USER) {
    document.querySelector(".article-ud").className = "article-ud-no"
  }

  return (
    <div className="create-box">
      <div className="type-box">
        <input className="type" value={board.BOARD_TYPE} />
      </div>
      <div className="input-box">
        <div className="article-input-box">
          <div className="article-title-box">{board.BOARD_TITLE}</div>
          <div className="article-content-box">{board.BOARD_CONTENT}</div>
        </div>
        <div></div>
        <div className="input-option">
          <div className="option-bottom">
            <div className="option-button">작성 {board.BOARD_USER}</div>
          </div>
          <div className="option-bottom">
            <div className="option-button">날짜 {board.BOARD_YMD}</div>
          </div>
          <div className="option-bottom">
            <div className="option-button">조회 {board.BOARD_CNT}회</div>
          </div>
          <div className="option-bottom article-ud">
            <Link
              to={{
                pathname: `/articles/${board.BOARD_NO}/update`,
                state: board,
              }}
            >
              <button className="back-button">수정</button>
            </Link>
          </div>
          <div className="option-bottom article-ud">
            <button className="back-button">삭제</button>
          </div>
          <div className="option-bottom">            
            <Link to="/articles" style={{ color: "black" }}>
              <button className="back-button">
                목록
              </button>
            </Link>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
