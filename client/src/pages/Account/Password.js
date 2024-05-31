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
`