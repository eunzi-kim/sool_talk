import REACT, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';
import "./css/Signup.css";

const DaumPost = ({}) => {
    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        //fullAddress -> 전체 주소반환
    }
    return (
      <div className="modal">
        <div className="modal-body">
          <div className="modal-close"><button><h3>❌</h3></button></div>
          <div className="modal-title">
            <h3>📫 주소검색</h3>
          </div>
          <DaumPostCode onComplete={handleComplete} className="post-code" />
        </div>
      </div>
    );
}
export default DaumPost;