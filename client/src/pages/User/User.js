import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import Header from "../../components/Header/Header";
import UserLayout from "../../components/User/User";
import Footer from "../../components/Footer/Footer";

function User(){
  

  const [userFullname, setUserFullname] = useState('');
  

  function handleUserName(fullname){
    setUserFullname(fullname);
  }

  document.title=userFullname;

  return(
    <Wrapper>
      <Header/>
      <div className="content-section">
      <UserLayout onDataReceived={handleUserName}/>
      </div>
      <Footer/>
    </Wrapper>
  )
}

export default User;

const Wrapper = styled.div`
  .content-section{
    width: 100%;
    margin-top: 60px;
  }
`