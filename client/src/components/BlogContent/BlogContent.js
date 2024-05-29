import styled from "styled-components";
import React, {useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark as faBookmarked,
  faStar as faStared,
} from "@fortawesome/free-solid-svg-icons";


function BlogContent(){
  return(
    <Wrapper>
      <div className="blog-content-container">
        <div className="blog-content-user">
          <div className="blog-content-author">
            <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" alt="" className="blog-author-avatar" />
            <div className="blog-content-create-at">
              <a href="" className="blog-author-name">xuanduong</a>
              <p className="blog-create-at-time">đã đăng lúc 2024</p>
            </div>
          </div>
          <div className="blog-content-action">
            <button className="blog-content-action-btn">

            </button>
            <button className="blog-content-action-btn">

            </button>
            <button className="blog-content-action-btn">

            </button>
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
      <div className="blog-comment-container">
        
      </div>
    </Wrapper>
  )
}

export default BlogContent;

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 80px;

  .blog-content-container{
    width: var(--general-width);
    margin: 0 auto;
  }

  .blog-content-user{
    display: flex;
    justify-content: space-between;
  }


`