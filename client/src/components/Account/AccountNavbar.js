import styled from "styled-components";
import React, {useState, useEffect} from "react";

function AccountNavbar(){

  const [activeItemNavbar, setActiveItemNavbar] = useState("account-navbar-link active");

  function clickItemNavbar(){

  }

  return(
    <Wrapper>
      <div className="account-navbar">
        <h2 className="account-navbar-title">Tài khoản</h2>
        <ul className="account-navbar-list">
          <li className="acccount-navbar-item">
            <a href="/account/profile" className="account-navbar-link active">
              <span>Thông tin cá nhân</span>
            </a>
          </li>
          <li className="acccount-navbar-item">
            <a href="/account/password" className="account-navbar-link">
              <span>Mật khẩu</span>
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default AccountNavbar

const Wrapper = styled.div`
  width: 280px;
  padding: 24px 20px 24px 0;

  .account-navbar{
    width: 100%;
    box-sizing: border-box;
  }

  .account-navbar-title{
    padding: 0;
    margin: 0;
    text-align: left;
  }

  .account-navbar-list{
    list-style: none;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
  }

  .acccount-navbar-item{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 8px;
  }

  .account-navbar-link{
    width: 100%;
    height: max-content;
    padding: 12px;
    border-radius: 8px;
    display: block;
    font-weight: 800;
    box-sizing: border-box;
    transition: var(--transition-time);
  }

  .account-navbar-link.active{
    background-color: var(--hightlight-color);
    color: white;
  }

  .account-navbar-link:not(.active):hover{
    background-color: var(--primary-color);
  }

`
