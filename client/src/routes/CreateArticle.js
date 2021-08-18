import axios from "axios";
import React, { useState } from "react";
import "./css/CreateArticle.css";

function CreateArticle() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [board, setBoard] = useState({
    BOARD_TYPE: "",
    BOARD_TITLE: "",
    BOARD_CONTENT: "",
    BOARD_CNT: 0,
    BOARD_USER: userInfo.nickname,
    BOARD_YMD: ""
  });

  const fetchCreateArticle = async ( data ) => {
    const url = "http://i5c106.p.ssafy.io:8081/stalk/board/boardcreate"
    
    await axios.post(url, data)
    .then(res => {
      window.location.replace("/articles");
    })
    .catch(err => {
      alert("게시글 작성에 실패하셨습니다.")
    })
  }

  // 타입 선택
  const onTypeClick = (e) => {
    if (document.querySelector(".type-chk")) {
      document.querySelector(".type-chk").className = "type"
    }
    e.target.className="type-chk"
    board.BOARD_TYPE = e.target.value
  }

  // 게시글 제목
  const onChangeTitle = (e) => {
    board.BOARD_TITLE = e.target.value
  }

  // 게시글 내용
  const onChangeContent = (e) => {
    board.BOARD_CONTENT = e.target.value
  }

  // 게시글 작성
  const onCreateArticle = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = ("0" + (date.getMonth()+1)).slice(-2)
    const day = ("0" + date.getDate()).slice(-2)
    const hour = ("0" + date.getHours()).slice(-2)
    const minutes = ("0" + date.getMinutes()).slice(-2)
    const seconds = ("0" + date.getSeconds()).slice(-2)
    const YMD = month + "/" + day + "/" + year + " " + hour + ":" + minutes + ":" + seconds
    board.BOARD_YMD = YMD

    fetchCreateArticle(board)
  }

  const onCancelArticle = () => {
    window.location.replace("/articles");
  }

  return (
    <div className="create-box">
      <div className="type-box">
        <input type="button" className="type" value="자유" onClick={onTypeClick}/>
        <input type="button" className="type" value="건의" onClick={onTypeClick}/>
        <input type="button" className="type" value="불만" onClick={onTypeClick}/>
        <input type="button" className="type" value="신고" onClick={onTypeClick}/>
      </div>
      <div className="input-box">
        <div className="article-input-box">
          <input
            className="article-title-box"
            placeholder="제목을 입력하세요..."
            onChange={onChangeTitle}
          ></input>
          <textarea
            className="article-content-box"
            placeholder="내용을 입력하세요..."
            onChange={onChangeContent}
          ></textarea>
        </div>
        <div></div>
        <div className="input-option">
          <textarea className="option-top">
            [메모장] 이 곳에 적는 글은 남들이 볼 수도 저장되지도 않습니다.
          </textarea>
          <div className="option-bottom">
            <button className="cancel-button" onClick={onCancelArticle}>취소</button>
            <button className="ok-button" onClick={onCreateArticle}>작성</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateArticle;
