import React, {useEffect, useState} from "react";
import styled from 'styled-components';


function NewPost(){
  return (
    <Wrapper>
      <div className="new-post-container">
        <div className="new-post-title">
          <input type="text" className="new-post-title-input" placeholder="Tiêu đề"/>
        </div>
        <div className="new-post-tags">
          <input type="text" className="new-post-tags-input" placeholder="Gắn thẻ"/>
        </div>
        <div className="new-post-action">
          <button className="new-post-button">Xuất bản</button>
        </div>
        <div className="new-post-content">
        <textarea type="text" className="new-post-content-input" placeholder="Nội dung bài viết"/>
        </div>
      </div>
    </Wrapper>
  )
}

export default NewPost;

const Wrapper = styled.div`
  width: 100vw;
  margin-top: 80px;
  padding: 0 12px;
  box-sizing: border-box;

  .new-post-container>div{
    margin-bottom: 12px;
    width: 100%;
    box-sizing: border-box;
  }

  input{
    padding: 8px 16px;
  }

  .new-post-action{
    display: flex;
    justify-content: right;
  }

  .new-post-button{
    background-color: var(--shadow-color);
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    transition: var(--transition-time);
  }

  .new-post-button:hover{
    background-color: var(--hightlight-color);
  }

  .new-post-content-input{
    outline: none;
    border: 1px solid var(--shadow-color);
    border-radius: 4px;
    padding: 8px 16px;
    height: max-content;
    min-height: 700px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    resize: none;
  }

`