import React from "react";
import "../video.js"
import startAction from "../video.js"
import "./Screen.css";

function MyScreen() {

  return (
    <div className="screen-self">
      <div className="my-video">
        <video id="localVideo" autoPlay playsInline></video>
      </div>
      <div>
        <button 
          id="startButton"
          onClick={startAction}
        >
          내 화면 시작
        </button>
      </div>   
    </div>
  )
}

export default MyScreen