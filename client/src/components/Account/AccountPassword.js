import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';

function AccountPassword(){

  const id='66669b9c646d48fe74ba397b';
  const [hidePassword, setHidePassword] = useState(false);
  const [typeInput, setTypeInput] = useState('text');
  const [userPwd, setUserPwd] = useState('');
  const [inputPassword, setInputPassword]= useState({
    currentPwd: '',
    newPwd:'',
    confirmPwd:'',
  })

  const [warning, setWarning]= useState(false);
  const [success, setSuccess]= useState(false);


  useEffect(()=>{
    const getPassword= async (req,res)=>{
      try {
        const response = await axios.get(`http://localhost:9999/accounts/${id}`);
        return response.data;
        
      } catch (err) {
        console.log(err.message);
      }
    }

    getPassword()
    .then(data=>{
      setUserPwd(data.password);
    })
    .catch(err=>{
      console.log(err.message);
    })
  },[userPwd]);

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

  function onChangValue(e){
    if(e.target.value.trim().length>0){
      setTypeInput('password');
    }
    
    const {name, value}= e.target;
    setInputPassword({
      ...inputPassword,
      [name]: value,
    })
  }

  function cancelInput(){
    setInputPassword({
      currentPwd: '',
      newPwd:'',
      confirmPwd:'',
    })
  }

  function handleChangePwd(){
    if(inputPassword.currentPwd.trim()!=userPwd)
      {
        setWarning(true);
      }
      else{
        setWarning(false);
      }
    if(inputPassword.currentPwd==userPwd && inputPassword.newPwd==inputPassword.confirmPwd)  
      {
        axios.put(`http://localhost:9999/accounts/${id}`,{password: inputPassword.newPwd.trim()})
        setSuccess(true);
        setTimeout(()=>{
          setSuccess(false);
        },3000)
        cancelInput();
      }
  }

  return(
    <Wrapper>
      <h2 className='password-container-title'>Mật khẩu</h2>
      <div className='password-container'>
        <div className='password-item'>
          <label htmlFor='password-current'>
            <span className='red-asterisk'>* </span>Mật khẩu hiện tại
          </label>
          <div className='password-type-box'>
            <input autoComplete='off' type={typeInput} name='currentPwd' id='password-current' className='password-input' 
            onChange={(e)=>onChangValue(e)}
            value={inputPassword.currentPwd}/>
            <button className='hide-password-btn' 
            onClick={handleHidePassword}>
              {hidePassword ?
                <FontAwesomeIcon icon={faEye} />
                : 
                <FontAwesomeIcon icon={faEyeSlash} />
              }
            </button>
          </div>
          {warning && (<span className='warning-box'>Sai mật khẩu hiện tại</span>)}
        </div>
        <div className='password-item'>
          <label htmlFor='password-new'>
            <span className='red-asterisk'>* </span>Mật khẩu mới
          </label>
          <div className='password-type-box'>
            <input autoComplete='off' type={typeInput} name='newPwd' id='password-new' className='password-input' 
            onChange={(e)=>onChangValue(e)}
            value={inputPassword.newPwd}/>
            <button className='hide-password-btn' 
            onClick={handleHidePassword}>
              {hidePassword ?
                <FontAwesomeIcon icon={faEye} />
                : 
                <FontAwesomeIcon icon={faEyeSlash} />
              }
            </button>
          </div>
          {inputPassword.newPwd.trim().length<6 
          && (<span className='warning-box'>Không được bỏ trống, mật khẩu phải có ít nhất 6 ký tự</span>)}
        </div>
        <div className='password-item'>
          <label htmlFor='password-confirm'>
            <span className='red-asterisk'>* </span>Nhập lại mật khẩu mới
          </label>
          <div className='password-type-box'>
            <input autoComplete='off' type={typeInput} name='confirmPwd' id='password-confirm' className='password-input' 
            onChange={(e)=>onChangValue(e)}
            value={inputPassword.confirmPwd}/>
            <button className='hide-password-btn' 
            onClick={handleHidePassword}>
              {hidePassword ?
                <FontAwesomeIcon icon={faEye} />
                : 
                <FontAwesomeIcon icon={faEyeSlash} />
              }
            </button>
          </div>
          {inputPassword.confirmPwd.length>0 && inputPassword.confirmPwd.trim()!=inputPassword.newPwd.trim()
          && (<span className='warning-box'>Không khớp mật khẩu mới</span>)}
        </div>
        <div className='password-item'>
          {success && (<span className='success-box'>Đổi mật khẩu thành công</span>)}
          
        </div>
        <div className='password-action'>
          <button onClick={cancelInput} className='password-btn'>Hủy</button>
          <button onClick={handleChangePwd} className='password-btn active'>Lưu</button>
        </div>
      </div>
    </Wrapper>
  )
}

export default AccountPassword

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
    position: relative;
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

  .warning-box{
    position: absolute;
    top: 100%;
    font-size: 14px;
    color: red;
  }

  .success-box{
    position: absolute;
    top: 100%;
    color: green;
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