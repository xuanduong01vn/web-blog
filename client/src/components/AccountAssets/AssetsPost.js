import styled from 'styled-components';
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faThumbsUp,
  faThumbsDown,
  faStar
}from '@fortawesome/free-solid-svg-icons';
import AssetsPostItem from './AccountPostItem';

function AssetsPost(){

  const [noQuestion,setNoQuestion]=useState(false);

  return (
    <Wrapper>
      <div className="post-list-container">
      <h2 className="post-container-title">Bài viết</h2>
      {noQuestion&&
        <div className="post-list-alert">
          <span>Chưa có bài viết nào</span>
        </div>
      }

      {!noQuestion &&
        <ul className="post-list-box">
          <li className="post-item">
            <AssetsPostItem/>
          </li>
          <li className="post-item">
            <AssetsPostItem/>
          </li>
        </ul>
      }
      </div>
    </Wrapper>
  )
}

export default AssetsPost;

const Wrapper = styled.div`
  width: 100%;

  .post-list-alert{
    width: 100%;
    border: 1px solid var(--shadow-color);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    font-size: 24px;
    color: var(--shadow-color);
  }

  .post-list-box{
    list-style: none;
    margin: 0%;
    padding: 0;
  }

  .post-item{
    border-bottom: 1px solid var(--shadow-color);
    margin-bottom: 12px;

    &:last-child{
      border-bottom: none;
    }
  }


`