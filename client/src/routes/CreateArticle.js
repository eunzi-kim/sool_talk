import React from "react";
import "./css/CreateArticle.css";

function CreateArticle() {
  return (
    <div className="create-box">
      <div className="type-box">
        <div className="type">자유</div>
        <div className="type">건의</div>
        <div className="type">불만</div>
        <div className="type">신고</div>
      </div>
      <div className="input-box">
        <div className="article-input-box">
          <input
            className="article-title-box"
            placeholder="제목을 입력하세요..."
          ></input>
          <textarea
            className="article-content-box"
            placeholder="내용을 입력하세요..."
          ></textarea>
        </div>
        <div></div>
        <div className="input-option">
          <textarea className="option-top">
            [메모장] 이 곳에 적는 글은 남들이 볼 수도 저장되지도 않습니다.
          </textarea>
          <div className="option-bottom">
            <div className="cancel-button">취소</div>
            <div className="ok-button">작성</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateArticle;
