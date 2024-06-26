import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import PostList from '../PostList/PostList.js';
import QuestionList from '../QuestionList/QuestionList.js';


function HomeLayout(){
  const [selectPost, setSelectPost] = useState(true);

  const handleSelectPost=()=>{
    if(!selectPost)
      setSelectPost(true);
  }

  const handleSelectQuestion=()=>{
    if(selectPost)
      setSelectPost(false);
  }

  return (
    <Wrapper>
      <div className='home-content'>
      {/* <div className='content-select-bar'>
        <div onClick={handleSelectPost} className='content-select active'>
          Bài viết
        </div>
        <div onClick={handleSelectQuestion} className='content-select'>
          Câu hỏi
        </div>
      </div> */}
      <div className='home-content-box'>
        <div className='blog-container-col'>
          <h2 className='blog-container-title'>Bài viết mới nhất</h2>
            <PostList/>
        </div>
      
        
        
        <QuestionList/>
      </div>
        
      </div>
    </Wrapper>
  )
}

export default HomeLayout;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  min-height: 640px;
  
  .home-content{
    margin-top: 60px;
    width: var(--general-width);
  }

  .content-select-bar{
    width: 100%;
    display: none;

  }

  .content-select{
    width: 50%;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    padding: 4px 12px;
    background-color: var(--primary-color); 
  }

  .content-select:hover{
    background-color: var(--shadow-color); 
  }

  .content-select.active{
    color: var(--hightlight-color);
    background-color: transparent; 
  }

  

  .home-content-box{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .blog-container-col{
    width: 70%;
  }

  /* small desktop*/
  @media (max-width: 1279px) and (min-width: 769px) {
    .home-content{
      width: 100%;
      box-sizing: border-box;
      padding: 0 12px;
    }

  }

  /* tablet large phone*/
  @media (max-width: 768px) and (min-width: 481px) {
    .home-content-box{
      width: 100%;
      box-sizing: border-box;
      padding: 0 12px;
      display: block;
    }

    .blog-container-col{
      width: 100%;
    }

    .content-select-bar{
      display: flex;
    }
  }

  /* small phone */
  @media (max-width: 480px) {

    .home-content-box{
      width: 100%;
      box-sizing: border-box;
      padding: 0 12px;
      display: block;
    }

    .blog-container-col{
      width: 100%;
    }

    .content-select-bar{
      display: flex;
    }
  }
`