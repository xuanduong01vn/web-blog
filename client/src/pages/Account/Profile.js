import ProfileSection from "../../components/Account/Profile";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AccountNavbar from "../../components/Account/AccountNavbar";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

function Profile(){
  return (
    <Wrapper>
      <Header/>
      <div className="account-container">
        <AccountNavbar/>
        <ProfileSection/>
      </div>
      <Footer/>
    </Wrapper>
  )
}

export default Profile;

const Wrapper = styled.div`
  min-height: 760px;

  .account-container{
    display: flex;
    width: var(--general-width);
    margin: 80px auto 20px auto;
  }
`