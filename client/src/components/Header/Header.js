import styled from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,
          faPen,
          faBell,
          faXmark,
 } from '@fortawesome/free-solid-svg-icons';

 

function Header(){

  const [openPopUp, setOpenPopUp] = useState(true);

  const [openInput, setOpenInput]= useState(false);
  const [idSearchBox, setIdSearchBox]= useState("search-box");

  const handleOpenSearchBox =()=>{
    if(!openInput)
      setOpenInput(true);
  }

  const handleCloseSearchBox =()=>{
    if(openInput)
      setOpenInput(false);
  }

  // let widthBrowser =  window.innerWidth;
  // const checkBrowserWidth=()=>{
  //   widthBrowser<=768?setOpenInput(false):setOpenInput(true);
  // }

  // let widthBrowser =useRef();
  // const onChangeWidthBrowser=()=>{
  //   widthBrowser.current=window.innerWidth;
  //   widthBrowser.current<=768?setOpenInput("search-container-no-input"):setOpenInput("search-container");
  // }
  // window.addEventListener('resize', onChangeWidthBrowser);  


  

  useEffect(()=>{

    
    
    const checkBrowserWidth=()=>{
      //   widthBrowser<=768?setOpenInput(false):setOpenInput(true);
      // }
    }
    

  },)

  useEffect(() => {
    const userOpenPopUpBtn = document.querySelector(".user-bar.user-btn");
 
    const userPopUp = document.getElementById("user-pop-up");
    
  
    function handleOpenPopUp(e){
      setOpenPopUp(true);
      console.log(e.target);
    }

    userOpenPopUpBtn.addEventListener('click', handleOpenPopUp);
    return () => {
      userOpenPopUpBtn.removeEventListener('click', handleOpenPopUp);
    };

    

    function handleClosePopUp(e){
      console.log(e.target);
      if(e.target!==userPopUp){
        setOpenPopUp(false);
      }

      
    }

    

    // document.addEventListener('click', handleClosePopUp);
    

    

  }, []);

    return (    
        <Wrapper>
          <div className="header-container">
            {openInput &&
              <div className="header-search-bar">
                <input type="text" className="header-search-box"  placeholder='Tìm kiếm trên QAx'/>
                <button onClick={handleCloseSearchBox} id="search-cancel-btn">
                  <FontAwesomeIcon icon={faXmark} className="search-cancel-icon" />
                </button>
              </div>
            }
            <div className="header-bar">
              <a href="/" className="header-title">QAx</a>
              <div id="search-container">
                  <input id="search-box" type="text" placeholder='Tìm kiếm trên QAx'/>
                  <button id="search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                  </button>
                  <button onClick={handleOpenSearchBox} id="search-header-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                  </button>
              </div> 
              {/* <div id="sign-container">
                <a href="/login" id="sign-btn">
                  Đăng nhập/ Đăng ký
                </a>
              </div> */}
              <div className="user-container">
                <div className="user-container-item">
                  <button className="new-blog-btn user-btn">
                    <FontAwesomeIcon icon={faPen} className='new-blog-icon user-container-icon'/>
                    {openPopUp && <div className="header-pop-up new-blog-pop-up">
                      <ul className='header-pop-up-list'>
                        <li className='header-pop-up-item'>
                          <a href="/create/post" className="header-pop-up-link create-blog">
                            Tạo bài viết
                          </a>
                        </li>
                        <li className='header-pop-up-item'>
                          <a href="/create/question" className="header-pop-up-link create-question">
                            Đặt câu hỏi
                          </a>
                        </li>
                      </ul>
                    </div>
                    }
                  </button>
                </div>
                <div className="user-container-item">
                  <button className="notify-btn user-btn">
                    <FontAwesomeIcon icon={faBell} className='notify-icon user-container-icon'/>
                    <div className="notify-alert">
                      <p className='notify-alert-amount'>68</p>
                    </div>
                  </button>
                </div>
                <div className="user-container-item">
                  <button className="user-bar user-btn">
                    <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
                    alt="user avatar" className="user-image"/>
                    <p className="user-name">username</p>
                    {openPopUp && <div className="header-pop-up user-pop-up">
                      <ul className='header-pop-up-list'>
                        <li className='header-pop-up-item'>
                          <a href="/account/profile" className="header-pop-up-link user-profile">
                            Trang cá nhân
                          </a>
                        </li>
                        <li className='header-pop-up-item'>
                          <a href="/user" className="header-pop-up-link blog-manage">
                            Tổng quan
                          </a>
                        </li>
                        <li className='header-pop-up-item'>
                          <a href="/account/post" className="header-pop-up-link blog-manage">
                            Quản lý bài viết
                          </a>
                        </li>
                        <li className='header-pop-up-item'>
                          <a href="" className="header-pop-up-link log-out">
                            Đăng xuất
                          </a>
                        </li>
                      </ul>
                    </div>
                    }
                  </button>
                </div>
              </div>
            </div>
          </div>                                    
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
  .header-container{
    width: 100%;
    height: 60px;
    background-color: var(--primary-color);
    margin-bottom: 40px;
    position: fixed;
    top: 0;
    box-shadow: 0 0 10px var(--shadow-color);
    z-index: 98;
  }

  .header-search-bar{
    width: 100%;
    position: absolute;
    z-index: 101;
    height: 60px;
    display: flex;
    box-sizing: border-box;
  }

  .header-search-box{
    background-color: white;
    text-align: left;
    align-items: center;
    border-radius: 0;
    height: 100%;
    width: 100%;
    padding: 12px 38px 12px 24px;
  }

  #search-cancel-btn{
    position: absolute;
    right: 12px;
    height: 36px;
    width: 36px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 102;

    & svg{
      width: 100%;
      height: 100%;
      transition: var(--transition-time);
    }
  }

  #search-cancel-btn:hover svg{
    color: var(--shadow-color);
  }

  .header-bar{
    width: var(--general-width);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .header-title{
    color: var(--shadow-color);
    font-size: 40px;
    font-weight: 800;
    text-shadow: 
      -1px -1px 0 var(--text-color),  
      1px -1px 0 var(--text-color),
      -1px 1px 0 var(--text-color),
      1px 1px 0 var(--text-color);
  }

  #search-container{
    border-radius: 18px;
    width: max-content; 
    min-width: 36px;
    height: 36px;
    display: flex;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    align-items: center;
  }

  #search-box{
    border-radius: 18px;
    border: 2px solid var(--shadow-color);
    width: 400px; 
    outline: none;
    padding: 8px 36px 8px 24px;
    font-size: 16px;
    background-color: white;
  }

  #search-box-open{
    width: 100%; 
    outline: none;
    padding: 8px 36px 8px 24px;
    font-size: 16px;
    background-color: white;
  }

  #search-container button{
    position: absolute;
    right: 0;
    border: none;
    height: 36px;
    width: 36px;
    background-color: transparent;
  }

  #search-container button svg{
    height: 20px;
    transition: var(--transition-time);
  }

  #search-container button:hover svg{
    height: 20px;
    color: var(--shadow-color);
  }

  #search-btn{
    display: block;
  }

  #search-header-btn{
      display: none;
    }

  #sign-btn{
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    transition: var(--transition-time);
  }

  #sign-btn:hover{
    color: var(--hightlight-color);
  }

  .user-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .user-container-item{
    position: relative;
    margin-right: 18px;
    width: max-content;
    height: max-content;
  }

  .user-container-item:last-child{
    margin-right: 0;
  }

  .user-btn{
    width: 30px;
    height: 30px;
    cursor: pointer;
    outline: 0;
    border: 0;
    background-color: transparent;
  }

  .user-btn:hover >svg, 
  .user-btn:hover >p{
    color: var(--shadow-color);
  }

  .notify-btn{
    position: relative;
  }

  .notify-alert{
    position: absolute;
    top: -4px;
    left: 12px;
    background-color: var(--hightlight-color);
    color: var(--primary-color);
    width: max-content;
    height: 18px;
    min-width: 18px;
    padding: 2px 4px;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    border: 1px solid var(--primary-color);
    box-sizing: border-box;
  }

  .notify-alert-amount{
    width: max-content;
    height: max-content;
  }

  .user-container-icon{
    color: var(--text-color);
    height: 100%;
    width: 100%;
  }

  .user-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-right: 0;
    width: max-content;
    padding-right: 0;
  }

  .user-image{
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 6px;
  }

  .user-name{
    font-size: 16px;
    color: var(--text-color);
  }

  
  .header-pop-up{
    position: absolute;
    z-index: 99;
    top: calc(100%);
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 0px 2px var(--shadow-color);
    border: 1px solid var(--shadow-color);
    transition: var(--transition-time);
    transform-origin: 0 -12px;
  }

  .user-bar:hover > .user-pop-up{
    transform: scaleY(100%) translateX(0);
  }

  .user-pop-up{
    right: 0;
    transform: scaleY(0%) translateX(0);
  }

  .header-pop-up::before{
    content: "";
    z-index: 100;
    display: block;
    border-width: 12px;
    border-style: solid;
    border-color: transparent transparent white transparent;
    position: absolute;
    top: -24px;
    right: 24px;       
  }

  .header-pop-up::after{
    content: "";
    z-index: 99;
    display: block;
    border-width: 13px;
    border-style: solid;
    border-color: transparent transparent var(--shadow-color) transparent;
    position: absolute;
    top: -26px;
    right: 23px;       
  }

  .new-blog-pop-up{
    right: 50%;
    transform: scaleY(0%) translateX(50%);
  }

  .new-blog-btn:hover > .new-blog-pop-up{
    transform: scaleY(100%) translateX(50%);
  }

  .new-blog-pop-up::before{
    right: 50%;    
    transform: translateX(50%);   
  }

  .new-blog-pop-up::after{
    right: 50%;  
    transform: translateX(50%);     
  }

  .header-pop-up-list{
    list-style: none;
  }

  .header-pop-up-list{ 
    list-style: none;
    padding: 0;
    margin: 0;
    width: max-content;
  }

  .header-pop-up-item{
    height: max-content;
    font-size: 16px;
    text-align: left;
    display: flex;
    align-items: center;
    margin: 0;
  }

  .header-pop-up-item:last-child{
    border-bottom: 0;
  }

  .header-pop-up-link{
    width: 100%;
    padding: 12px 40px 12px 12px;
    transition: var(--transition-time);
    color: var(--text-color);
  }

  .header-pop-up-link:hover{
    color: var(--hightlight-color);
    background-color: var(--primary-color);
  }

  /* small desktop*/
  @media (max-width: 1279px) and (min-width: 769px) {
    .header-bar{
      width: 100%;
      padding: 0 12px;
    }
  }

  /* tablet large phone*/
  @media (max-width: 768px) and (min-width: 481px) {
    .header-bar{
      width: 100%;
      padding: 0 12px;
    }

    .user-name{
      display: none;
    }

    #search-container{
      border-radius: 0;
      width: 100%; 
      height: 100%;
      margin: 0 18px 0 auto;
    }

    #search-btn{
      display: none;
    }

    #search-header-btn{
      display: block;
    }

    #search-box{
      display: none;
    }

  }

  /* small phone */
  @media (max-width: 480px) {
    .header-bar{
      width: 100%;
      padding: 0 12px;
    }

    .user-name{
      display: none;
    }

    #search-container{
      border-radius: 0;
      width: 100%; 
      height: 100%;
      margin: 0 18px 0 auto;
    }

    #search-btn{
      display: none;
    }

    #search-header-btn{
      display: block;
    }

    #search-box{
      display: none;
    }
  }

`