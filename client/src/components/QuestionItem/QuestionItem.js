import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faThumbsUp,
  faThumbsDown,
  faStar
}from '@fortawesome/free-solid-svg-icons'

function QuestionItem(){
  return(
    <Wrapper>
      <div className="question-item-cover">
        <a href="" className="question-item-title">
          <h3>Cách tạo 1 project bằng Reactjs và Express</h3> 
          </a>
        <div className="question-item-user">
          <div className="question-item-author">
            <a href="/user" className="question-item-author-info">
              xuanduong
            </a>
          </div>
          <span className="uestion-item-author-ask"> đã hỏi lúc 20:00</span>
        </div>
        
        <div className="question-item-interact">
          <div className="question-item-likes">
            <FontAwesomeIcon icon={faStar} />6
          </div>
          {/* <div className="question-item-dislikes">
            <FontAwesomeIcon icon={faThumbsDown} />6
          </div> */}
          <div className="question-item-comments">
            <FontAwesomeIcon icon={faComment} />8
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default QuestionItem;

const Wrapper = styled.div`

  .question-item-cover{
    width: 100%;
  }

  .question-item-title{
    margin: 0;
    transition: var(--transition-time);

    & h3{
      margin: 0;
    }

    &:hover h3{
      color: var(--hightlight-color);
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
    color: var(--hightlight-color);
    transition: var(--transition-time);

    &:hover{
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
      color: var(--shadow-color);
    }

    & svg{
      margin-right: 4px;
    }
  }

`