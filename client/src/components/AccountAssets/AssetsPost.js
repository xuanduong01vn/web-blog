import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faThumbsUp,
  faThumbsDown,
  faStar
}from '@fortawesome/free-solid-svg-icons';
import AssetsItem from './AssetItem';

function AssetsPost(){

  const [noQuestion,setNoQuestion]=useState(false);
  const [posts, setPosts] = useState([]);
  const [accs, setAccs] = useState([]);

  useEffect(()=>{
    const getPost= async(req,res)=>{
      try {
        const response = await axios.get(`http://localhost:9999/posts/?isDeleted=false`)
        return response.data;
      } catch (err) {
        console.log(err.message);
      }
    }
    getPost()
    .then(res=>{
      setPosts(res);
    })
    .catch(err=>{
      console.log(err.message);
    })
  },[]);

  useEffect(()=>{
    const getAcc= async(req,res)=>{
      try {
        const response = await axios.get(`http://localhost:9999/accounts/?isDeleted=false`)
        return response.data;
      } catch (err) {
        console.log(err.message);
      }
    }
    getAcc()
    .then(res=>{
      setAccs(res);
    })
    .catch(err=>{
      console.log(err.message);
    })
  },[]);

  return (
    <Wrapper>
      <div className='post-list-container'>
      <h2 className='post-container-title'>Bài viết</h2>
      {noQuestion&&
        <div className='post-list-alert'>
          <span>Chưa có bài viết nào</span>
        </div>
      }

      {!noQuestion &&
        <ul className='post-list-box'>
          {posts.map(p=>(
            <li key={p._id} className='post-item'>
            <AssetsItem author={accs.find(acc=>acc._id==p.idAuthor)} post={p}/>
          </li>
          ))}
          
        </ul>
      }
      </div>
    </Wrapper>
  )
}

export default AssetsPost;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

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

  /* small desktop*/
  @media (max-width: 1279px) and (min-width: 769px) {
    padding: 0 20px 0 0;

  }

  /* tablet large phone*/
  @media (max-width: 768px) and (min-width: 481px) {
    padding: 0 20px 0 0;

    .post-list-container{
      margin-top: 20px;
    }

    .post-container-title{
      display: none;
    }
  }

  /* small phone */
  @media (max-width: 480px) {
    padding: 0 20px;

    .post-list-container{
      margin-top: 20px;
    }

    .post-container-title{
      display: none;
    }
  }

`