import React from "react";
import "../video.js"
import callAction from "../video.js"
import "./Screen.css";

function OppScreen() {

  return (
    <div className="screen-opp">
      <div className="opp-video">
        <video id="remoteVideo" autoPlay playsInline></video>
      </div>
      <div>
        <button 
          id="callButton"
          onClick={callAction}
        >
          <h3>다른 사람과 연결</h3>
        </button>
      </div>   
    </div>
  )
}

export default OppScreen