import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  
} from '@fortawesome/free-regular-svg-icons';
import {
  faBookmark as faBookmarked,
  faStar,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import BlogList from "../BlogList/BlogList";
import QuestionList from "../QuestionList/QuestionList";

function UserLayout(){
  return (
    <Wrapper>
      <div className="user-layout">
        <div className="user-info-container">
          <div className="user-info-person">
            <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
            alt="" className="user-info-avatar" />
            <div className="user-info-name">
              <p className="user-info-fullname">Xuân Dương</p>
              <p className="user-info-username">xuanduong</p>
            </div>
          </div>
          <div className="user-statistic">
            <div className="statistic-item">
              <span className="statistic-title">Số lượng bài viết </span>
              <span className="statistic-ammount">8</span>
            </div>
            <div className="statistic-item">
              <span className="statistic-title">Số lượng câu hỏi </span>
              <span className="statistic-ammount">8</span>
            </div>
            <div className="statistic-item">
              <span className="statistic-title">Số lượng đánh giá </span>
              <span className="statistic-ammount">8</span>
            </div>
          </div>
        </div>
        <div className="user-content">
          <BlogList/>
          <QuestionList/>
        </div>
        
      </div>
      
    </Wrapper>
  )
}

export default UserLayout;

const Wrapper = styled.div`
  width: 100vw;
  margin-top: 80px;

  .user-layout{
    width: var(--general-width);
    margin: 0 auto;
  }

  .user-info-container{
    width: 100%;
  }

  .user-info-person{
    display: flex;
    align-items: center;
  }

  

  .user-info-avatar{
    width: 160px;
    height: 160px;
    border-radius: 50%;
    margin-right: 24px;
  }

  .user-info-fullname{
    font-size: 24px;
    font-weight: 800;
    margin: 0 0 24px 0;
  }

  .user-info-username{
    font-size: 18px;
    margin: 0;
  }

  .user-statistic{
    border-top: 1px solid var(--shadow-color);
    margin-top: 24px;
    padding: 12px 0;
    border-bottom: 1px solid var(--shadow-color);
  }

  .statistic-item{
    width: 180px;
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
  }

  .statistic-ammount{
    font-weight: 800;
  }

  .user-content{
    display: flex;
  }
`