import styled from "styled-components";
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera,
} from '@fortawesome/free-solid-svg-icons';

function Profile(){
  return(
    <Wrapper>
      <h2 className="profile-container-title">Thông tin cá nhân</h2>
      <div className="profile-container">
        <div className="profile-item">
          <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg"
          alt="Ảnh đại diện" className="profile-avatar"/>
          <button className="avatar-btn">
            <FontAwesomeIcon icon={faCamera} className="avatar-btn-icon"/>
          </button>
        </div>
        <div className="profile-item">
          <label htmlFor="">Tên tài khoản</label>
          <input type="text" id="profile-username" className="profile-input" disabled value={"xuanduong"}/>
        </div>
        <div className="profile-item">
          <label htmlFor="profile-fullname">
            <span className="red-asterisk">* </span>Tên hiển thị
          </label>
          <input type="text" id="profile-fullname" className="profile-input" value={"xuanduong"}/>
        </div>
        <div className="profile-item">
          <label htmlFor="profile-email">
          <span className="red-asterisk">* </span>Email
        </label>
          <input type="text" id="profile-email" className="profile-input" value={"xuanduong"}/>
        </div>
        <div className="profile-item">
          <label htmlFor="profile-birthday">
          <span className="red-asterisk">* </span>Ngày sinh
        </label>
          <input type="text" id="profile-birthday" className="profile-input" value={"xuanduong"}/>
        </div>
        <div className="profile-action">
          <button className="profile-btn">Hủy</button>
          <button className="profile-btn active">Lưu</button>
        </div>
        
      </div>
    </Wrapper>
  )
}

export default Profile

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--primary-color);
  padding: 24px;
  box-sizing: border-box;
  border-radius: 8px;

  .profile-container-title{
    margin: 0;
  }  
  
  .profile-container{
    margin-top: 20px;
  }

  .profile-item{
    position: relative;
    margin-bottom: 20px;
  }

  .red-asterisk{
    color: red;
  }

  .profile-avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  .avatar-btn{
    position: absolute;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    top: 150px;
    left: 150px;
    background-color: var(--primary-color);
    border: 2px solid var(--shadow-color);
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
      height: 60%;
      color: var(--text-color);
    }
  }

  label{
    display: block;
    font-size: 18px;
  }

  .profile-input{
  }

  .profile-action{
    display: flex;
    justify-content: right;
  }

  .profile-btn{
    background-color: var(--shadow-color);
    color: white;
    padding: 12px 32px;
    border-radius: 8px;
    margin-left: 20px;
  }

  .profile-btn.active{
    background-color: var(--hightlight-color);
  }

  /* small desktop*/
  @media (max-width: 1279px) and (min-width: 769px) {
    .user-layout{
      width: 100%;
      padding: 0 12px;
    }

  }

  /* tablet large phone*/
  @media (max-width: 768px) and (min-width: 481px) {
    .user-layout{
      width: 100%;
      padding: 0 12px;
    }
  }

  /* small phone */
  @media (max-width: 480px) {
    .user-layout{
      width: 100%;
      padding: 0 12px;
    }
  }

`