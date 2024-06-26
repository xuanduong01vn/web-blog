import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import NewPost from '../../components/NewPost/NewPost';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function CreatePost(){
  document.title='Create post';

  return (
    <Wrapper>
      <Header/>
      <NewPost/>
    </Wrapper>
  )
}

export default CreatePost;


const Wrapper = styled.div`

`