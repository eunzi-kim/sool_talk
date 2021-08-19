import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/ArticleDetail.css";

function ArticleDetail() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [board, setBoard] = useState({
    BOARD_TYPE: "",
    BOARD_TITLE: "",
    BOARD_CONTENT: "",
    BOARD_CNT: 0,
    BOARD_USER: userInfo.nickname,
    BOARD_YMD: "",
  });

  const fetchGetArticle = async () => {
    const url =
      "http://i5c106.p.ssafy.io:8081/stalk/board/boarddetail?board_no=9";

    await axios
      .get(url)
      .then((res) => {
        setBoard({
          ...board,
          BOARD_NO: res.data["board_NO"],
          BOARD_TYPE: res.data["board_TYPE"],
          BOARD_TITLE: res.data["board_TITLE"],
          BOARD_CONTENT: res.data["board_CONTENT"],
          BOARD_CNT: res.data["board_CNT"],
          BOARD_USER: res.data["board_USER"],
          BOARD_YMD: res.data["board_YMD"],
        });
      })
      .catch((err) => {
        alert("게시글 오류 발생");
      });
  };

  useState(() => {
    fetchGetArticle();
  }, []);
  // console.log(board);

  const onArticleUpdate = () => {
    window.location.replace('/articles/article-update');
    // window.location.replace(`/articles/article-update/${}`);
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
          <div className="option-bottom">
            <button className="back-button" onClick={onArticleUpdate}> 
                수정
            </button>
          </div>
          <div className="option-bottom">
            <button className="back-button" onClick={onArticleUpdate}> 
                삭제
            </button>
          </div>
          <div className="option-bottom">
            <button className="back-button">
              <Link to="/articles" style={{ color: "black" }}>
                목록
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleDetail;
