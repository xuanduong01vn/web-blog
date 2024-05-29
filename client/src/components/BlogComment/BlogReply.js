import React, { useEffect, useState } from "react";
import styled from "styled-components";

function BlogReply({openReply}){
  const [activeReply, setActiveReply]=useState(true);

  
  function closeReplyBox(e){
      openReply(false);
  }

  return (
    <Wrapper>
        <div className="blog-reply-type-box">
        <div className="reply-current-user">
          <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
          alt="" className="reply-current-user-avatar" />
          <p className="reply-current-user-name">xuanduong</p>
        </div>
        <input className="reply-type-box" type="text" placeholder="Viết bình luận..."/>
        <button className="reply-send-btn active">Bình luận</button>
        <button className="reply-send-btn" onClick={closeReplyBox}>Hủy</button>
      </div>
      
    </Wrapper>
  )
}

export default BlogReply;

const Wrapper = styled.div`

.blog-reply-type-box{
    padding-top: 12px;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    text-align: right;
  }

  .reply-current-user{
    border-top: 1px solid var(--shadow-color);
    padding-top: 12px;
  }

  .reply-current-user{
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    width: 100%;
  }

  .reply-current-user-avatar{
    height: 36px; 
    width: 36px;
    border-radius: 50%; 
    margin-right: 12px;
  }

  .reply-current-user-name{
    margin: 0;
  }

  .reply-type-box{
    border: 1px solid var(--shadow-color);
    border-radius: 4px;
    outline: none;
    padding: 8px;
    min-height: 36px;
    width: 100%;
    box-sizing: border-box;
  }      
  
  .reply-send-btn{
    margin: 12px 0 0 12px;
    padding: 12px 18px;
    background-color: var(--shadow-color);
    border: none;
    border-radius: 8px;
    color: white; 
    cursor: pointer;
    
    &:hover{
      opacity: 0.6;
    }
  }

  .reply-send-btn.active{
    background-color: var(--hightlight-color);
  }

  .reply-item-user-avatar{
    height: 36px; 
    width: 36px;
    border-radius: 50%;
    margin-right: 12px;
  }

  

  .reply-item-user-created{
    text-align: left;
  }

  .reply-item-username{
    color: var(--hightlight-color);
    font-weight: 600;

    &:hover{
      text-decoration: underline;
    }
  }

  .reply-item-created-time{
    margin: 0;
    font-size: 14px;
  }

  .reply-item-content p{
    text-align: left;
    font-size: 18px;
    margin: 4px 0;
  }

  .reply-item-action{
    display: flex ;
  }

  .reply-item-btn{
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 4px 0;
    margin-right: 12px;
  }

  .reply-item-btn.active{
    color: var(--hightlight-color);
  }

`