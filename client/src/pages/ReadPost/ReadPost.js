import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.js';
import Footer from "../../components/Footer/Footer.js";
import PostContent from '../../components/PostContent/PostContent.js';

function ReadPost(){
  document.title="Read post";
  
  return (
    <Wrapper>
      <Header/>
      <PostContent/>
      <Footer/>
    </Wrapper>
  )
}

export default ReadPost;

const Wrapper = styled.div``