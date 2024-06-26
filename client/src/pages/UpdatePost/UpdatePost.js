import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import EditPost from '../../components/EditPost/EditPost';
import Header from '../../components/Header/Header';

function UpdatePost(){

  const [titlepage, setTitlepage] =useState('');
  
  function handleTitle(title){
    setTitlepage(title);
  }

  document.title=`Edit ${titlepage}`;

  return (
    <Wrapper>
      <Header/>
      <EditPost onReceivedTitle={handleTitle}/>
    </Wrapper>
  )
}

export default UpdatePost;


const Wrapper = styled.div`

`