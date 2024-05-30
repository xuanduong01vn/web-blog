import styled from "styled-components";
import React, {useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faBookmark, 
} from "@fortawesome/free-regular-svg-icons";
import {
  faStar as faStared,
  faBookmark as faBookmarked,
} from "@fortawesome/free-solid-svg-icons";
import BlogComment from "../BlogComment/BlogComment.js";


function BlogContent(){

  const [liked, setLiked] = useState(false);
  const [marked, setMarked] = useState(false);

  function likeBlog(e){
    if(liked==false)
      setLiked(true);
    else
      setLiked(false);
  }

  function markBlog(e){
    if(marked==false)
      setMarked(true);
    else
      setMarked(false);
  }

  return(
    <Wrapper>
      <div className="blog-content-container">
        <div className="blog-content-user">
          <div className="blog-content-author">
            <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
            alt="" className="blog-author-avatar" />
            <div className="blog-content-created">
              <a href="/user" className="blog-author-name">xuanduong</a>
              <p className="blog-created-time">đã đăng lúc 2024</p>
            </div>
          </div>
          <div className="blog-content-action">
            <p className="liked-action-ammount">6</p>
            {!liked && 
              <button onClick={likeBlog} className="blog-content-action-btn">
                <FontAwesomeIcon icon={faStar}/>
              </button>
            }
            {liked &&
              <button onClick={likeBlog} className="blog-content-action-btn">
                <FontAwesomeIcon icon={faStared}/>
              </button>
            }
            <p className="marked-action-ammount">6</p>
            {!marked &&
              <button onClick={markBlog} className="blog-content-action-btn">
                <FontAwesomeIcon icon={faBookmark}/>
              </button>
            }
            {marked &&
              <button onClick={markBlog} className="blog-content-action-btn">
                <FontAwesomeIcon icon={faBookmarked}/>
              </button>
            } 
            
          </div>
        </div>
        <h1 className="blog-content-title">
            REAct basic hello world
        </h1>
        <div className="blog-content-text">
          <p>
          I. Thiết lập màu trong HTML:

          1. Công cụ Just Color Picker

          Color Picker hỗ trợ thiết kế đồ họa, webdesigner,... có thể xác định màu sắc, lấy mã màu nhanh chóng, lưu và chỉnh sửa các màu sắc, hoặc kết hợp các màu sắc lại với nhau. Để lấy mã màu bằng Color Picker, bạn di chuột đến bất cứ điểm ảnh nào để lấy được thông tin về điểm ảnh đó. Công cụ hỗ trợ tới 5 định dạng màu HTML, RGB, HEX, HSB/HSV và HSL. Vì thế chúng ta có thể chuyển đổi mã màu HTML, HEX, RGB sang các mã màu khác tương ứng.

          Công cụ Color Picker hỗ trợ nhiều ngô
          </p>
        </div>
      </div>
      <BlogComment/>
    </Wrapper>
  )
}

export default BlogContent;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  padding-top: 40px;
  flex-wrap: wrap;

  .blog-content-container{
    width: var(--general-width);
    margin: 0 auto;
  }

  .blog-content-user{
    display: flex;
    justify-content: space-between;
  }

  .blog-content-author{
    display: flex;
    justify-content: left;
    text-align: left;
  }

  .blog-author-avatar{
    height: 48px;
    width: 48px;
    border-radius: 50%;
    margin-right: 12px;
  }

  .blog-author-name{
    margin: 0;
    padding: 0;
    color: var(--hightlight-color);
    font-weight: 600;
    font-size: 18px;
  }

  .blog-author-name:hover{
    text-decoration: underline;
  }

  .blog-created-time{
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  .blog-content-action{
    display: flex;
    justify-content: right;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    color: var(--shadow-color);
  }

  .blog-content-action-btn{
    margin-right: 12px;
    width: 40px;
    height: 40px;
    outline: none;
    border: none;
    background-color: transparent; 
    color: var(--shadow-color);
    cursor: pointer;


    svg{
      height: 60%;
    }
  }
  .blog-content-action-btn:last-child{
    margin-right: 0;
  }

  .blog-content-title{
    text-align: left;
  }

`