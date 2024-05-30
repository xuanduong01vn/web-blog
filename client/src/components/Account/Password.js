import styled from "styled-components";
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera,
} from '@fortawesome/free-solid-svg-icons';

function Password(){
  return(
    <Wrapper>
      <h2 className="password-container-title">Mật khẩu</h2>
      <div className="password-container">
        <div className="password-item">
          <label htmlFor="password-current">
            <span className="red-asterisk">* </span>Mật khẩu hiện tại
          </label>
          <input type="text" id="password-current" className="password-input" value={"xuanduong"}/>
        </div>
        <div className="password-item">
          <label htmlFor="password-new">
            <span className="red-asterisk">* </span>Mật khẩu mới
          </label>
          <input type="text" id="password-new" className="password-input" value={"xuanduong"}/>
        </div>
        <div className="password-item">
          <label htmlFor="password-confirm">
            <span className="red-asterisk">* </span>Nhập lại mật khẩu mới
          </label>
          <input type="text" id="password-confirm" className="password-input" value={"xuanduong"}/>
        </div>
        <div className="password-action">
          <button className="password-btn">Hủy</button>
          <button className="password-btn active">Lưu</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Password

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--primary-color);
  padding: 24px;
  box-sizing: border-box;
  border-radius: 8px;
  height: max-content;

  .password-container-title{
    margin: 0;
  }  
  
  .password-container{
    margin-top: 20px;
  }

  .password-item{
    position: relative;
    margin-bottom: 20px;
  }

  .red-asterisk{
    color: red;
  }

  .password-avatar{
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

  .password-input{
    font-size: 18px;
    width: 100%;
    box-sizing: border-box;
    padding: 4px 24px;
    border: 1px solid var(--shadow-color);
    border-radius: 4px; 
  }

  .password-input:focus{
    border: 1px solid var(--hightlight-color);
  }

  .password-action{
    display: flex;
    justify-content: right;
  }

  .password-btn{
    background-color: var(--shadow-color);
    color: white;
    padding: 12px 36px;
    border-radius: 8px;
    margin-left: 20px;
  }

  .password-btn.active{
    background-color: var(--hightlight-color);
  }

`