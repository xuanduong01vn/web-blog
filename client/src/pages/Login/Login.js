import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import { useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';



function Login(){
  document.title='Login';

  const [hidePassword, setHidePassword] = useState(false);
  const [typeInput, setTypeInput] = useState("password");

  const[valueUsername, setValueUsername]=useState('');
  const[valuePassword, setValuePassword]=useState('');

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

  

  let User={
    username: valueUsername,
    password: valuePassword
  }

  function onSubmit(){
    console.log(User);
  }

  function listenValue(e){
    console.log(e.target.value);
  }

  return(
    <Wrapper>
      <div className="login-container">
        <h1 className="page-name">QAx</h1>
        <h3 className="page-title">Đăng nhập vào QAx</h3>
        <div className="input-item">
          <input id="username-input"  type="text" placeholder="Tên người dùng"
          onChange={(e)=>{
            setValueUsername(e.target.value);
          }} />
        </div>
        <div className="input-item">
          <input id="password-input" type={typeInput} placeholder="Mật khẩu" 
           onChange={(e)=>{
            setValuePassword(e.target.value);
          }} />
          <button className="hide-password-btn" 
          onClick={handleHidePassword}>
            {hidePassword ?
              <FontAwesomeIcon icon={faEye} />
              : 
              <FontAwesomeIcon icon={faEyeSlash} />
            }
          </button>
        </div>
        
        
        <button onClick={onSubmit} className="login-btn">Đăng nhập</button>
        <div className="other-action">
          <a href="/forgot-password" className="forgot-password-btn">Quên mật khẩu?</a>
          <a href="/register" className="register-btn">Tạo tài khoản</a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Login;

const Wrapper =styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-container{
    width: 450px;
    box-shadow: 0 0 10px var(--shadow-color);
    border-radius: 8px;
    padding: 54px 32px;
    box-sizing: border-box;
  }

  .page-name{
    text-align: center;
    margin: 0;
    font-weight: 800;
    font-size: 54px;
    color: var(--shadow-color);
    text-shadow: 
      -1px -1px 0 var(--text-color),  
      1px -1px 0 var(--text-color),
      -1px 1px 0 var(--text-color),
      1px 1px 0 var(--text-color);
  }

  .input-item{
    width: 100%;
    position: relative;
    height: max-content;
    margin-bottom: 24px;
  }

  input{
    width: 100%;
    outline: none;
    height: 36px;
    padding: 0 36px 0 12px;
    box-sizing: border-box;
    border: 1px solid var(--shadow-color);
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

  .login-btn{
    outline: none;
    border-radius: 4px;
    background-color: var(--hightlight-color);
    width: 100%;
    padding: 12px 0;
    border: none;
    color: white;
    display: block;
    text-align: center;
  }
  
  .login-btn:hover{
    opacity: 0.6;
  }

  .other-action{
    margin: 12px 0;
    display: flex;
    justify-content: space-between;

    a{
      color: var(--hightlight-color);
    }

    a:hover{
      text-decoration: underline;
    }
    
  }

  
`