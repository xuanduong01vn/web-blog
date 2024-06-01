import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronDown,
  faHouse,
  faFile,
  faPen,
  faQuestion,
  faAddressCard,
  faUserGear,
  faUser,
  faHashtag,
 } from '@fortawesome/free-solid-svg-icons';

 function DashboardLayout(){

  const [openedLowMenu, setOpenedLowMenu] = useState(true);
  const [openMenuIcon, setOpenMenuIcon] = useState("opened-menu-icon");

  const [openedLowMenus, setOpenedLowMenus] = useState({

  });

  const handleOpenLowMenu = (menu) => {
    setOpenedLowMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // const handleOpenLowMenu=(e)=>{
  //   if(!openedLowMenu){
  //     setOpenedLowMenu(true);
  //     setOpenMenuIcon("opened-menu-icon opened");
  //   }
  //   else{
  //     setOpenedLowMenu(false);
  //     setOpenMenuIcon("opened-menu-icon");
  //   }
  // }

  return(
    <Wrapper>
      <ul className="top-menu">
      <li className="top-menu-item">
        <a href="/dashboard/tags" className="menu-item-link">
          <FontAwesomeIcon icon={faHouse} />Tổng quan
        </a>
      </li>
        <li className="top-menu-item">
          <button onClick={() => handleOpenLowMenu('posts')} className="top-menu-down">
              <FontAwesomeIcon icon={faFile} />Bài viết
            <span className={openMenuIcon} >
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            
          </button>
          {openedLowMenu &&
            <ul className="low-menu">
            <li className="low-menu-item">
              <a href="/dashboard/posts" className="menu-item-link">
              <FontAwesomeIcon icon={faPen} />Bài viết
              </a>
            </li>
            <li className="low-menu-item">
              <a href="/dashboard/questions" className="menu-item-link">
              <FontAwesomeIcon icon={faQuestion} />Câu hỏi
              </a>
            </li>
          </ul>
          }
          
        </li>
        <li className="top-menu-item">
          <button  onClick={() => handleOpenLowMenu('account')} className="top-menu-down">
              <FontAwesomeIcon icon={faAddressCard} />Tài khoản
            <span className={openMenuIcon}>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            
          </button>
          {openedLowMenu &&
            <ul className="low-menu">
            <li className="low-menu-item">
              <a href="/dashboard/admins" className="menu-item-link">
              <FontAwesomeIcon icon={faUserGear} />Quản trị viên
              </a>
            </li>
            <li className="low-menu-item">
              <a href="/dashboard/uers" className="menu-item-link">
              <FontAwesomeIcon icon={faUser} />Người dùng
              </a>
            </li>
          </ul>
          }
        </li>
        <li className="top-menu-item">
          <a href="/dashboard/tags" className="menu-item-link">
            <FontAwesomeIcon icon={faHashtag} />Gắn nhãn
          </a>
        </li>
      </ul>
    </Wrapper>
  )
 }

 export default DashboardLayout;

 const Wrapper = styled.div`
  min-width: 240px;
  background-color: var(--primary-color);
  height: calc(100vh - 60px);
  box-sizing: border-box;

  ul{
    list-style: none;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
    transition: var(--transiton-time);
  }

  .low-menu{
    padding: 0 24px;
  }

  
  li{
    width: 100%;
    box-sizing: border-box;
  }

  .top-menu-down:hover,
  .menu-item-link:hover
  {
    background-color: var(--shadow-color);
  }

  .menu-item-link{
    padding: 12px 24px;
    display: block;
    height: 100%;
    border-radius: 8px;
    
  }
  .top-menu-down{
    font-size: 16px;
    position: relative;
    width: 100%;
    text-align: left;
    padding: 12px 24px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
  }

  svg{
    margin-right: 8px;

  }

  .opened-menu-icon{
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%) rotateX(0deg);
    transition: var(--transiton-time);
    display: flex;
    align-self: center;
  }

  

  .opened-menu-icon.opened{
    transform: translateY(-50%) rotateX(180deg);
  }
  
 `