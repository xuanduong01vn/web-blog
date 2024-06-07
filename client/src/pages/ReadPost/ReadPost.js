import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Header from '../../components/Header/Header.js';
import Footer from "../../components/Footer/Footer.js";
import PostContent from '../../components/PostContent/PostContent.js';

function ReadPost(){
  
  const [postTitle, setPostTitle] = useState("");
  document.title=postTitle;

  const handlePostTitle = (title) => {
    setPostTitle(title);
  };
  
  return (
    <Wrapper>
      <Header/>
      <PostContent onDataReceived={handlePostTitle}/>
      <Footer/>
    </Wrapper>
  )
}

export default ReadPost;

const Wrapper = styled.div``