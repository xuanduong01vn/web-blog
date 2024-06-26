import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header.js';
import HomeLayout from '../../components/HomeLayout/HomeLayout';
import Footer from '../../components/Footer/Footer';

function Home(){
  document.title='QAx';
  return(
    <Wrapper>
      <Header/>
      <HomeLayout/>
      <Footer/>
    </Wrapper>
  )
}

export default Home;

const Wrapper = styled.div`
`