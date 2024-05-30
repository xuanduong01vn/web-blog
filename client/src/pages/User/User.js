import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import Header from "../../components/Header/Header";
import UserLayout from "../../components/User/User";
import Footer from "../../components/Footer/Footer";

function User(){
  document.title="User";
  return(
    <Wrapper>
      <Header/>
      <UserLayout/>
      <Footer/>
    </Wrapper>
  )
}

export default User;

const Wrapper = styled.div`

`