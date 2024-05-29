import styled from "styled-components";
import React, {useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment 
} from "@fortawesome/free-regular-svg-icons";

function BlogComment(){
  return(
    <Wrapper>
      <div className="blog-comment-container">
        <h3>Chưa có bình luận nào</h3>
        <div className="blog-comment-alert">
          <FontAwesomeIcon icon={faComment}/>
          <p>Đăng nhập để bình luận</p>
        </div>
        <div className="blog-comment-type-box">
          <div className="comment-current-user">
            <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
            alt="" className="comment-current-user-avatar" />
            <p className="comment-current-user-name">xuanduong</p>
          </div>
          <input className="comment-type-box" type="text" placeholder="Viết bình luận..."/>
          <button className="comment-send-btn active">Bình luận</button>
          <button className="comment-send-btn">Hủy</button>
        </div>
        <ul className="blog-comment-list">
          <li className="blog-comment-item">
            <div className="comment-item-created">
              <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
              alt="" className="comment-item-user-avatar" />
              <div className="comment-item-user-created">
                <a href="" className="comment-item-username">xuanduong</a>
                <p className="comment-item-created-time">bình luận lúc 2024</p>
              </div>
            </div>
            <div className="comment-item-content">
              <p>Hay đấy</p>
            </div>
            
            <ul className="blog-reply-list">
              <li className="blog-reply-item">
                <div className="reply-item-created">
                  <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
                  alt="" className="reply-item-user-avatar" />
                  <div className="reply-item-user-created">
                    <a href="" className="reply-item-username">xuanduong</a>
                    <p className="reply-item-created-time">bình luận lúc 2024</p>
                  </div>
                </div>
                <div className="reply-item-content">
                  <p>Hay đấy</p>
                </div>
                <div className="reply-item-action">
                  <button className="reply-item-btn active">
                    Trả lời
                  </button>
                  <button className="reply-item-btn">
                    Sửa
                  </button>
                  <button className="reply-item-btn">
                    Xóa
                  </button>
                </div>
              </li>
              <li className="blog-reply-item">
                <div className="reply-item-created">
                  <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
                  alt="" className="reply-item-user-avatar" />
                  <div className="reply-item-user-created">
                    <a href="" className="reply-item-username">xuanduong</a>
                    <p className="reply-item-created-time">bình luận lúc 2024</p>
                  </div>
                </div>
                <div className="reply-item-content">
                  <p>Hay đấy</p>
                </div>
                <div className="reply-item-action">
                  <button className="reply-item-btn active">
                    Trả lời
                  </button>
                  <button className="reply-item-btn">
                    Sửa
                  </button>
                  <button className="reply-item-btn">
                    Xóa
                  </button>
                </div>
              </li>
            </ul>
            <div className="blog-reply-type-box">
              <div className="reply-current-user">
                <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
                alt="" className="reply-current-user-avatar" />
                <p className="reply-current-user-name">xuanduong</p>
              </div>
              <input className="reply-type-box" type="text" placeholder="Viết bình luận..."/>
              <button className="reply-send-btn active">Trả lời</button>
              <button className="reply-send-btn">Hủy</button>
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default BlogComment;

const Wrapper = styled.div`

  .blog-comment-container{
    width: var(--general-width);
    border-top: 1px solid var(--shadow-color);
    text-align: left;
  }

  .blog-comment-alert{
    border: 1px solid var(--shadow-color);
    color: var(--shadow-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 12px 0;

    svg{
      margin-right: 12px;
    }
  }

  .blog-comment-type-box{
    width: 100%;
    border: 1px solid var(--shadow-color);
    border-radius: 8px;
    padding: 12px;
    box-sizing: border-box;
    text-align: right;
  }

  .comment-current-user,
  .reply-current-user{
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    width: 100%;
  }
  .comment-current-user-avatar,
  .reply-current-user-avatar{
    height: 36px; 
    width: 36px;
    border-radius: 50%; 
    margin-right: 12px;
  }

  .comment-current-user-name,
  .reply-current-user-name{
    margin: 0;
  }

  .comment-type-box,
  .reply-type-box{
    border: 1px solid var(--shadow-color);
    border-radius: 4px;
    outline: none;
    padding: 8px;
    min-height: 36px;
    width: 100%;
    box-sizing: border-box;
  }      
  
  .comment-send-btn,
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

  .comment-send-btn.active,
  .reply-send-btn.active{
    background-color: var(--hightlight-color);
  }

  .blog-comment-list{
    list-style: none;
    padding: 0;
    margin: 12px 0;
    width: 100%;
  }

  .blog-comment-item{
    border: 1px solid var(--shadow-color);
    border-radius: 8px;
    outline: none;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
  }

  .comment-item-created,
  .reply-item-created{
    display: flex;
    align-items: center;
  }

  .comment-item-user-avatar,
  .reply-item-user-avatar{
    height: 36px; 
    width: 36px;
    border-radius: 50%;
    margin-right: 12px;
  }

  .comment-item-user-created,
  .reply-item-user-created{
    text-align: left;
  }

  .comment-item-username,
  .reply-item-username{
    color: var(--hightlight-color);
    font-weight: 600;

    &:hover{
      text-decoration: underline;
    }
  }

  .comment-item-created-time,
  .reply-item-created-time{
    margin: 0;
    font-size: 14px;
  }

  .comment-item-content p,
  .reply-item-content p{
    text-align: left;
    font-size: 18px;
    margin: 4px 0;
  }

  .comment-item-action,
  .reply-item-action{
    display: flex ;
  }

  .comment-item-btn,
  .reply-item-btn{
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 4px 0;
    margin-right: 12px;
  }

  .comment-item-btn.active,
  .reply-item-btn.active{
    color: var(--hightlight-color);
  }

  .blog-reply-list{
    list-style: none;
    padding: 0 0 0 36px;
    margin-top: 12px;
    width: 100%;
    box-sizing: border-box;
  }

  .blog-reply-item{
    border-top: 1px solid var(--shadow-color);
    outline: none;
    padding: 12px 0;
    width: 100%;
    box-sizing: border-box;
  }

  .blog-reply-type-box{
    padding: 12px 0 0 36px;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
    text-align: right;
  }

  .reply-current-user{
    border-top: 1px solid var(--shadow-color);
    padding-top: 12px;
  }

`