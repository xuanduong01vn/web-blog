import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faThumbsUp,
  faThumbsDown,
}from '@fortawesome/free-solid-svg-icons'

function QuestionList(){
  return (
    <Wrapper>
      <div className="question-list-container">
      <h2 className="question-container-title">Danh sách câu hỏi</h2>
        <ul className="question-list-box">
          <li className="question-item">
            <div className="question-item-cover">
            <a href="" className="question-item-title">
                <h3>Cách tạo 1 project bằng Reactjs và Express</h3> 
              </a>
              <div className="question-item-user">
                <div className="question-item-author">
                  <a href="" className="question-item-author-info">
                    {/* <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
                    alt="" className="blog-author-avatar" /> */}
                    <p className="question-author-name">xuanduong </p>
                  </a>
                </div>
                <p className="uestion-item-author-ask">đã hỏi lúc 20:00</p>
              </div>
              
              <div className="question-item-interact">
                <div className="question-item-likes">
                  <FontAwesomeIcon icon={faThumbsUp} />6
                </div>
                <div className="question-item-dislikes">
                  <FontAwesomeIcon icon={faThumbsDown} />6
                </div>
                <div className="question-item-comments">
                  <FontAwesomeIcon icon={faComment} />8
                </div>
              </div>
            </div>
          </li>
          <li className="question-item">
            <div className="question-item-cover">
              <div className="question-item-user">
                <div className="question-item-author">
                  <a href="" className="question-item-author-info">
                    {/* <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
                    alt="" className="blog-author-avatar" /> */}
                    <p className="question-author-name">xuanduong</p>
                  </a>
                </div>
                <p> đã hỏi lúc 20:00</p>
              </div>
              <a className="question-item-title">
                <h3>How to react js</h3> 
              </a>
              
              <div className="question-item-interact">
                <div className="question-item-likes">
                  <FontAwesomeIcon icon={faThumbsUp} />6
                </div>
                <div className="question-item-dislikes">
                  <FontAwesomeIcon icon={faThumbsDown} />6
                </div>
                <div className="question-item-comments">
                  <FontAwesomeIcon icon={faComment} />8
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default QuestionList;

const Wrapper = styled.div`
  width: 30%;
  margin-left: 36px;
  text-align: left;
  

  .question-list-box{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .question-item{
    border-bottom: 1px solid var(--shadow-color);

    &:last-child{
      border-bottom: none ;
    }
  }

  .question-item-title{
    margin: 0;
    transition: var(--transition-time);

    & h3{
      margin: 0;
    }

    &:hover h3{
      color: var(--shadow-color);
    }
  }

  .question-item-user{
    display: flex;
    margin: 4px 0;
    font-size: 14px;

    & p{
      margin: 0;
    }
  }

  .question-item-author{
    margin-right: 4px;
  }

  .question-item-author-info{
    font-weight: 600;
    color: var(--shadow-color);
    transition: var(--transition-time);

    &:hover p{
      text-decoration: underline;
    }
  }

  .question-item-interact{
    display: flex;
    justify-content: left;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;

    &>div{
      margin-right: 16px;
      opacity: 0.4;
    }

    & svg{
      margin-right: 4px;
    }
  }

  
`