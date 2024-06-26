import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; 

function AccountNavbar(props){

  const {title} =props;

  const navbarItems=[
    {path:'/account/profile', title: 'Thông tin cá nhân'},
    {path:'/account/password', title: 'Đổi mật khẩu'},
  ]

  const handleSelectNavbar=(e,index)=>{
    console.log(e.target.innerHTML); 
  }

  return(
    <Wrapper>
      <div className='account-navbar'>
        <h2 className='account-navbar-title'>Tài khoản</h2>
        <ul className='account-navbar-list'>
          {
            navbarItems.map((navbarItem, index)=>{
                return  <li key={index} className={navbarItem.title==title?`account-navbar-item active`:`account-navbar-item`}>
                          <Link to={navbarItem.path} 
                          onClick={handleSelectNavbar} 
                          className='account-navbar-link'>
                            <span>{navbarItem.title}</span>
                          </Link>
                        </li>
            })
          }
        </ul>
      </div>
    </Wrapper>
  )
}

export default AccountNavbar

const Wrapper = styled.div`
  min-width: 220px;
  padding: 24px 20px 24px 0;
  box-sizing: border-box;

  .account-navbar{
    width: 100%;
    box-sizing: border-box;
  }

  .account-navbar-title{
    padding: 0;
    margin-bottom: 16px;
    text-align: left;
  }

  .account-navbar-list{
    list-style: none;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  .account-navbar-item{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 8px;
    border-radius: 8px;
  }

  .account-navbar-item.active{
    background-color: var(--primary-color);
   
    .account-navbar-link{
      color:var(--hightlight-color);
    }
  }

  .account-navbar-item:not(.active):hover{
    background-color: var(--primary-color);
  }

  .account-navbar-link{
    width: 100%;
    height: max-content;
    padding: 12px;
    display: block;
    font-weight: 800;
    box-sizing: border-box;
    transition: var(--transition-time);
  }

  /* small desktop*/
  @media (max-width: 1279px) and (min-width: 769px) {


  }

  /* tablet large phone*/
  @media (max-width: 768px) and (min-width: 481px) {
    width: 100%;
    padding: 0;


    .account-navbar-title{
      display: none;
    }

    .account-navbar-list{
      display: flex;
    }
  }

  /* small phone */
  @media (max-width: 480px) {
    width: 100%;
    padding: 0;

    .account-navbar-title{
      display: none;
    }

    .account-navbar-list{
      display: flex;
    }
  }


`
