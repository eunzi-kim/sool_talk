import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Chat.css";
import ChatApp from "./ChatApp";
import MyScreen from "./MyScreen";
import OppScreen from "./OppScreen";
import { useDispatch } from "react-redux";
import { deleteMessages } from "../modules/chatting";

function Chat() {
  const dispatch = useDispatch();
  const onDeleteMessages = () => dispatch(deleteMessages());

  const age_all = [
    "좋아하는 음식", "민트초코 & 파인애플 피자", "배라 좋아하는 맛 TOP3", "좋아하는 연예인",
    "좋아하는 영화 / 장르", "여름 vs 겨울", "국내여행 vs 해외여행", "가장 맛있었던 여행지 음식",
    "놀이공원, 놀이기구 호불호", "좋아하는 게임", "가장 최근에 본 영화", "가장 최근에 본 드라마",
    "전공", "해본 적 있는 아르바이트", "혈액형", "MBTI 결과","아침형 인간 vs 저녁형 인간",
    "운세, 사주 등을 믿는지", "귀신 본 경험", "요즘 가장 하고 싶은 것", "좋아하는 향 or 향수"
  ]
  const age_19 = [
    "3분컷 어떻게 생각하시나요?", "채팅이 안 돼요."
  ]
  const age_29 = [
    "3cm에 대해 어떻게 생각하시나요?", "강직도 vs 크기 vs 굵기"
  ]


  const [randomContent, setRandomContent] = useState([]);

  const onRandomAll = () => {
    age_all.sort(() => Math.random() - 0.5)
    setRandomContent((randomContent) => [
      randomContent = age_all[0]
    ])
    if (document.querySelector(".chat-modal-no")) {
      document.querySelector(".chat-modal-no").className = "chat-modal"
    }
  }

  const onRandom19 = () => {
    age_19.sort(() => Math.random() - 0.5)
    setRandomContent((randomContent) => [
      randomContent = age_19[0]
    ])
    if (document.querySelector(".chat-modal-no")) {
      document.querySelector(".chat-modal-no").className = "chat-modal"
    }
  }

  const onRandom29 = () => {
    age_29.sort(() => Math.random() - 0.5)
    setRandomContent((randomContent) => [
      randomContent = age_29[0]
    ])
    if (document.querySelector(".chat-modal-no")) {
      document.querySelector(".chat-modal-no").className = "chat-modal"
    }
  }

  const onModalClose = () => {
    if (document.querySelector(".chat-modal")) {
      document.querySelector(".chat-modal").className = "chat-modal-no"
    }
  }

  return (
    <div className="chat-box">
      <div className="chat-body">
        <div className="chat-1">
          <div className="opponent-screen">
            <OppScreen />
          </div>
          <div className="chat-btns">
            <div>
              <button className="chat-btn" onClick={onRandomAll}>전체연령가</button>
            </div>
            <div>
              <button className="chat-btn" onClick={onRandom19}>19금</button>
            </div>
            <div>
              <button className="chat-btn" onClick={onRandom29}>29금</button>
            </div>
          </div>
        </div>
        <div className="chat-2">
          <a href="/" onClick={onDeleteMessages}>
            <button className="chat-exit-btn">나가기</button>
          </a>
          <div className="my-screen">
            <MyScreen />
          </div>
          <div className="chat-screen">
            <ChatApp />
          </div>
        </div>
      </div>
      <div className="chat-modal-no">
        <div className="chat-modal-close">
          <button onClick={onModalClose}><h1>❌</h1></button>
        </div>
        <div className="chat-modal-body">
          <h1>{randomContent}</h1>
        </div>
      </div>
    </div>
  );
}

export default Chat;
