import React from "react";
import "./css/SearchFriends.css"

function SearchFriends() {
  const myInfo = JSON.parse(localStorage.getItem("userInfo"));

  // 이미지 없는 경우
  var imgProfile =
    "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile1.uf.tistory.com%2Fimage%2F990FCD335A1D68190E36F5";

  // 전체 유저 정보
  var allUsers = [
    ["황성안", 21, "여"],
    ["김도연", 21, "여"],
    ["김태현", 21, "여"],
    ["신종은", 21, "여"],
    ["황성안", 21, "여"],
    ["황성안", 21, "여"],
    ["황성안", 21, "여"],
    ["황성안", 21, "여"],
    ["황성안", 21, "여"],
    ["황성안", 21, "여"],
    ["황성안", 21, "여"],
    ["황성안", 21, "여"],
    ["황성안", 21, "여"]
  ]

  // 친구 선택
  const onSelectFriend = () => {
    window.location.replace("/chat");
  }

  const onSearchFriend = () => {
    if (document.querySelector(".friends-no")) {
      document.querySelector(".friends-no").className = "friends"
    }
  }

  return (
    <div className="search-friend">
      <button className="sf-btn" onClick={onSearchFriend}>
        <h2>
          <span className="fs-label">{myInfo.address}</span>
          에 있는 친구찾기 🔍
        </h2>
      </button>
      <div className="friends-no">
        {allUsers.map((user) => (
          <div className="friend" onClick={onSelectFriend}>
            <div className="friend-img">
              <img src={imgProfile} className="sf-image"/>
            </div>
            <div className="friend-info">
              {user[0]}<br/>
              {user[1]}<br/>
              {user[2]}
            </div>     
          </div> 
        ))}        
      </div>
    </div>
  )
}

export default SearchFriends;