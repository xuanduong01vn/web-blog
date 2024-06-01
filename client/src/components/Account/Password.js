import styled from "styled-components";
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

function Password(){
  const [hidePassword, setHidePassword] = useState(false);
  const [typeInput, setTypeInput] = useState("password");

  function handleHidePassword(e){
    if(hidePassword==true){
      setHidePassword(false);
      setTypeInput('password');
    }
    else{
      setHidePassword(true);
      setTypeInput('text');
    }
  }


  return(
    <Wrapper>
      <h2 className="password-container-title">Mật khẩu</h2>
      <div className="password-container">
        <div className="password-item">
          <label htmlFor="password-current">
            <span className="red-asterisk">* </span>Mật khẩu hiện tại
          </label>
          <div className="password-type-box">
            <input type={typeInput} id="password-current" className="password-input" value={"xuanduong"}/>
            <button className="hide-password-btn" 
            onClick={handleHidePassword}>
              {hidePassword ?
                <FontAwesomeIcon icon={faEye} />
                : 
                <FontAwesomeIcon icon={faEyeSlash} />
              }
            </button>
          </div>
          
        </div>
        <div className="password-item">
          <label htmlFor="password-new">
            <span className="red-asterisk">* </span>Mật khẩu mới
          </label>
          <div className="password-type-box">
            <input type={typeInput} id="password-new" className="password-input" value={"xuanduong"}/>
            <button className="hide-password-btn" 
            onClick={handleHidePassword}>
              {hidePassword ?
                <FontAwesomeIcon icon={faEye} />
                : 
                <FontAwesomeIcon icon={faEyeSlash} />
              }
            </button>
          </div>
        </div>
        <div className="password-item">
          <label htmlFor="password-confirm">
            <span className="red-asterisk">* </span>Nhập lại mật khẩu mới
          </label>
          <div className="password-type-box">
            <input type={typeInput} id="password-confirm" className="password-input" value={"xuanduong"}/>
            <button className="hide-password-btn" 
            onClick={handleHidePassword}>
              {hidePassword ?
                <FontAwesomeIcon icon={faEye} />
                : 
                <FontAwesomeIcon icon={faEyeSlash} />
              }
            </button>
          </div>
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
    margin-bottom: 20px;
  }


  .red-asterisk{
    color: red;
  }

  label{
    display: block;
    font-size: 18px;
  }

  .password-type-box{
    position: relative;
    z-index: 1;
  }

  .password-input{

  }

  .hide-password-btn{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 36px;
    width: 36px;
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--shadow-color);
  }

  .password-action{
    display: flex;
    justify-content: right;
  }

  .password-btn{
    background-color: var(--shadow-color);
    color: white;
    padding: 12px 32px;
    border-radius: 8px;
    margin-left: 20px;
  }

  .password-btn.active{
    background-color: var(--hightlight-color);
  }

`