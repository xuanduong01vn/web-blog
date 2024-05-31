import styled from "styled-components";
import React, {useState, useEffect} from "react";

function AccountNavbar(){

  const [activeItemNavbar, setActiveItemNavbar] = useState("account-navbar-item active");

  function clickItemNavbar(){

  }

  const navbarItems=[
    {path:"/account/profile", title: "Thông tin cá nhân"},
    {path:"/account/password", title: "Mật khẩu"},
  ]

  const [selectedItem, setSelectedItem]=useState(0);

  const handleSelectNavbar=(e,index)=>{
    console.log(e.target.innerHTML); 
  }

  return(
    <Wrapper>
      <div className="account-navbar">
        <h2 className="account-navbar-title">Tài khoản</h2>
        <ul className="account-navbar-list">
          {
            navbarItems.map((navbarItem, index)=>{
                return  <li key={index} className="account-navbar-item">
                          <a onClick={handleSelectNavbar} 
                          href={navbarItem.path} 
                          className="account-navbar-link">
                            <span>{navbarItem.title}</span>
                          </a>
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

  .account-navbar-item{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 8px;
    border-radius: 8px;
  }

  .account-navbar-item.active{
    background-color: var(--hightlight-color);
   
    .account-navbar-link{
      color: white;
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

  

`
