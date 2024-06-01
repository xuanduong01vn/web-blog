import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera
} from '@fortawesome/free-solid-svg-icons';

function NewAdmin(){
  return(
    <Wrapper>
      <h2 className="profile-container-title">Tạo mới quản trị viên</h2>
      <div className="profile-container">
        <div className="profile-item">
          <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg"
          alt="Ảnh đại diện" className="profile-avatar"/>
          <button className="avatar-btn">
            <FontAwesomeIcon icon={faCamera} className="avatar-btn-icon"/>
          </button>
        </div>
        <div className="profile-item">
          <label htmlFor="">
            <span className="red-asterisk">* </span>Tên tài khoản
          </label>
          <input type="text" id="profile-username" className="profile-input" value={"xuanduong"}/>
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
        <div className="profile-item">
          <label htmlFor="profile-birthday">
          <span className="red-asterisk">* </span>Mật khẩu
        </label>
          <input type="text" id="profile-birthday" className="profile-input" value={"xuanduong"}/>
        </div>
        <div className="profile-item">
          <label htmlFor="profile-birthday">
          <span className="red-asterisk">* </span>Xác nhận lại mật khẩu
        </label>
          <input type="text" id="profile-birthday" className="profile-input" value={"xuanduong"}/>
        </div>
        <div className="profile-action">
          <a href="/dashboard/admins" className="profile-btn active">Lưu</a>
        </div>
        
      </div>
    </Wrapper>
  )
}

export default NewAdmin

const Wrapper = styled.div`
  width: var(--general-width);
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

`