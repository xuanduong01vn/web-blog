import styled from 'styled-components';
import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera,
} from '@fortawesome/free-solid-svg-icons';

function Profile(){

  const id ="66669b9c646d48fe74ba397b";
  const inputFileRef = useRef();
  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);
  const [avatarImg, setAvatarImg] = useState(null);

  const [inputValue, setInputValue] = useState({
    fullname:'',
    birthday:'',
  })

  useEffect(()=>{
    const getUser = async(req,res )=>{
      try {
        const response = await axios.get(`http://localhost:9999/accounts/${id}`);
        return response.data;
      } catch (err) {
        console.log(err.message);
      }
    };
    getUser()
    .then(res=>{
      setUser(res);
      setInputValue({
        ...inputValue,
        fullname: res.fullname,
      })
      setAvatarImg(res.avatar);
      setInputBirthday({
        yearSelect: new Date(res.birthday).getFullYear(),
        monthSelect: new Date(res.birthday).getMonth()+1,
        dateSelect: new Date(res.birthday).getDate(),
      })
    })
    .catch(err=>{
      console.log(err.message);
    })
    .finally(data=>{
      setLoading(false);
    })
  },[]);

  
  const [inputBirthday, setInputBirthday] = useState({
    yearSelect: new Date(user?.birthday).getFullYear(),
    monthSelect: new Date(user?.birthday).getMonth()+1,
    dateSelect: new Date(user?.birthday).getDate(),
  })

  
  // var now = new Date();
  var nowYear = new Date().getFullYear();
  var years = [];
  var months = [];
  var dates = [];
  var [datePerMonth, setDatePerMonth]=useState(28);

  useEffect(()=>{
    switch (inputBirthday?.monthSelect) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        setDatePerMonth(31);
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        setDatePerMonth(30);
        break;
      case 2:
        if((inputBirthday.yearSelect%4==0 && inputBirthday.yearSelect%100!=0) ||(inputBirthday.yearSelect%400==0)){
          setDatePerMonth(29);
        }else{
          setDatePerMonth(28);
        }
        break;
      default:
        break;
    }
  },[inputBirthday])

  for(let i=nowYear;i>nowYear-100;i--){
    years.push(i);
  } 

  for(let i=12;i>0;i--){
    months.unshift(i);
  }

  function onChangeYear(e){
    const{id, value}=e.target;
    setInputBirthday({
      ...inputBirthday,
      [id]: Number(value),
    })
    if(id=="yearSelect"){
      setInputBirthday({
        [id]: Number(value),
        monthSelect: 1,
        dateSelect: 1,
      })
      setDatePerMonth(31);
    }
    
  }

  for(let i=datePerMonth;i>0;i--){
    dates.unshift(i);
  }

  function onChangeValue(e){
    const {name, value}=e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    })
  }

  function handleUPdateProfile(){
    axios.put(`http://localhost:9999/accounts/${id}`,{...inputValue,
    birthday: new Date(inputBirthday.yearSelect,inputBirthday.monthSelect-1,inputBirthday.dateSelect)
    })
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err.message);
    })
  }

  function handleChooseFile(){
    inputFileRef.current.click();
  }

  function onChangeFile(e){
    console.log(e.target.files[0]);
    setAvatarImg(URL.createObjectURL(e.target.files[0]));
  }

    return(
      <Wrapper>
        <h2 className="profile-container-title">Thông tin cá nhân</h2>
        {!loading && 
          <div className="profile-container">
          <div className="profile-item">
            <div className="profile-avatar">
              <img src={avatarImg}
              alt="Ảnh đại diện" className="avatar-image"/>
            </div>
            <input ref={inputFileRef} className="avatar-input" type="file" 
              onChange={(e)=>onChangeFile(e)}/>
            <button onClick={handleChooseFile} className="avatar-btn" >
              <FontAwesomeIcon icon={faCamera} className="avatar-btn-icon"/>
            </button>
          </div>
          <div className="profile-item">
            <label htmlFor="">Tên tài khoản</label>
            <input type="text" id="profile-username" className="profile-input" disabled value={user.username}/>
          </div>
          <div className="profile-item">
            <label htmlFor="profile-fullname">
              <span className="red-asterisk">* </span>Tên hiển thị
            </label>
            <input name="fullname" type="text" id="profile-fullname" className="profile-input" 
            value={inputValue.fullname}
            onChange={e=>{onChangeValue(e)}}/>
          </div>
          <div className="profile-item">
            <label htmlFor="profile-email">
              <span className="red-asterisk">* </span>Email
            </label>
            <input name="email" type="text" id="profile-email" disabled className="profile-input" 
            value={user.email}
            onChange={onChangeValue}/>
          </div>
          <div className="profile-item">
            <label htmlFor="profile-birthday">
              <span className="red-asterisk">* </span>Ngày sinh
            </label>
            <span>
              <select value={inputBirthday.yearSelect} onChange={(e)=>onChangeYear(e)} id="yearSelect">
                {years.map((y,index)=>(
                  <option key={index} value={y}>{y}</option>
                ))}
              </select>
              <select value={inputBirthday.monthSelect} onChange={(e)=>onChangeYear(e)} id="monthSelect">
                {months.map((m,index)=>(
                  <option key={index} value={m}>Tháng {m}</option>
                ))}
              </select>
              <select value={inputBirthday.dateSelect} onChange={(e)=>onChangeYear(e)} id="dateSelect">
                {dates.map((d,index)=>(
                  <option key={index} value={d}>Ngày {d}</option>
                ))}
              </select>
            </span>
            {/* <input data-name="birthday" type="text" id="profile-birthday" className="profile-input" 
            value={user.birthday}
            onChange={e=>{onChangeValue(e)}}/> */}
          </div>
          <div className="profile-action">
            <button className="profile-btn">Hủy</button>
            <button onClick={handleUPdateProfile} className="profile-btn active">Lưu</button>
          </div>
          
        </div>
        }
        
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
    margin-bottom: 20px;
    position: relative;
  }

  .red-asterisk{
    color: red;
  }

  .profile-avatar{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
  }

  .avatar-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    padding: 0;

    svg{
      position: absolute;
      z-index: 12;
      height: 60%;
      color: var(--text-color);
    }
  }

  .avatar-input{
    display: none;
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

  select{
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid var(--shadow-color);
    outline: none;
    margin-right: 12px;
    text-align: left;

    &:focus{
      border: 1px solid var(--hightlight-color);
    }
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
    .profile-item:first-child{
      display: flex;
      justify-content: center;
    }

    .avatar-btn{
      left: calc(50% + 50px);
    }

    .user-layout{
      width: 100%;
      padding: 0 12px;
    }

    select{
      padding: 8px;
    }
  }

`