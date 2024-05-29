import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.js';
import Footer from "../../components/Footer/Footer";
import BlogContent from '../../components/BlogContent/BlogContent.js';

document.title="Read blog";

function ReadBlog(){
  return (
    <Wrapper>
      <Header/>
      <BlogContent/>
      <Footer/>
    </Wrapper>
  )
}

export default ReadBlog;

const Wrapper = styled.div``