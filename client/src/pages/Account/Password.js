import PasswordSection from "../../components/Account/Password";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AccountNavbar from "../../components/Account/AccountNavbar";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

function Profile(){
  document.title="Change password";
  return (
    <Wrapper>
      <Header/>
      <div className="account-container">
        <div className="account-layout">
          <AccountNavbar/>
          <PasswordSection/>
        </div>
      </div>
      <Footer/>
    </Wrapper>
  )
}

export default Profile;

const Wrapper = styled.div`

  .account-container{
    display: flex;
    width: 100vw;
    margin: 80px 0 20px 0;
    min-height: 560px;
    justify-content: center;
  }

  .account-layout{
    width: var(--general-width);
    display: flex;
  }

  /* small desktop*/
  @media (max-width: 1279px) and (min-width: 769px) {
    .account-layout{
      width: 100%;
      padding: 0 12px;
    }

  }

  /* tablet large phone*/
  @media (max-width: 768px) and (min-width: 481px) {
    .account-container{
      margin-top: 60px;
    }
    

    .account-layout{
      width: 100%;
      padding: 0 12px;
      display: block;
    }
  }

  /* small phone */
  @media (max-width: 480px) {
    .account-container{
      margin-top: 60px;
    }
    
    .account-layout{
      width: 100%;
      padding: 0 12px;
      display: block;
    }
  }
`