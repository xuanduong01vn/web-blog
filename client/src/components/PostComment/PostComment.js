import styled from "styled-components";
import React, {useEffect, useState } from "react";
import axios from 'axios';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment 
} from "@fortawesome/free-regular-svg-icons";

import CommentItem from "./CommentItem.js";

function PostComment(props){

  const {post}= props;
  const [inputComment, setInputComment] = useState('');
  const [amountCmt, setAmountCmt] = useState(post.amountComment);
  const [listComment, setListComment] = useState([]);
  const [listUser, setListUser] = useState([]);
  const [valueComment, setValueComment] = useState({
    content: '',
    idUser: '66669b9c646d48fe74ba397b',
    idPost: post._id,
    createAt: new Date(),
    idParent: '',
    isDeleted: false,
  });

  console.log(amountCmt);

  useEffect(()=>{
    const getComments = async(req,res)=>{
      try {
        const response = await axios.get(`http://localhost:9999/comments?idPost=${post._id}&idParent=${""}&sort=asc`);
        return response.data;
      } catch (err) {
        console.log(err.message);
      }
    }
    getComments()
    .then(data=>{
      setListComment(data);
    })
    .catch(err=>{
      console.log(err.message);
    })
  },[amountCmt]);

  useEffect(()=>{
    const getUsers = async(req,res)=>{
      try {
        const response = await axios.get(`http://localhost:9999/accounts`);
        return response.data;
      } catch (err) {
        console.log(err.message);
      }
    }
    getUsers()
    .then(data=>{
      setListUser(data);
    })
    .catch(err=>{
      console.log(err.message);
    })
  },[]);

  function getInfoUser(id){
    return listUser.find(user=>user._id==id)
  }

  function onChangeInput(e){
    setInputComment(e.target.value);
    setValueComment({
      ...valueComment,
      content: e.target.value.trim(),
    })
  }

  function cancelComment(){
    setInputComment('');
  }

  function postComment(){
    if(inputComment.trim().length>0){
      setValueComment({
        ...valueComment,
        content: inputComment.trim(),
      })
      axios.post(`http://localhost:9999/comments`,valueComment)
      .then(res=>{
        cancelComment();
        setValueComment({
          ...valueComment,
          content: '',
        })
      })
      .catch(err=>{
        console.log(err.message);
      })

      axios.put(`http://localhost:9999/posts/${post._id}`,{amountComment: amountCmt+1})
      .then(res=>{
        console.log(res.data);
        setAmountCmt(res.data.data.amountComment);
      })
      .catch(err=>{
        console.log(err.message);
      })
    }
  }

  function handleDeleteComment(idCmt){
    axios.put(`http://localhost:9999/comments/${idCmt}`,{isDeleted: true})
    .then(res=>{
      setValueComment(res.data.data);
      let index =listComment.findIndex(cmt=>cmt._id==idCmt);
      listComment.splice(index, 1, valueComment);
      console.log(listComment);
      setListComment(listComment);
      setValueComment({
        content: '',
        idUser: '66669b9c646d48fe74ba397b',
        idPost: post._id,
        createAt: new Date(),
        idParent: '',
        isDeleted: false,
      });
    })
    .catch(err=>{
      console.log(err.message);
    })

    axios.put(`http://localhost:9999/posts/${post._id}`,{amountComment: listComment.filter(cmt=>cmt.isDeleted==false).length-1})
    .then(res=>{
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err.message);
    })
  }

  return(
    <Wrapper>
      <div className="post-comment-container">
        <div className="post-comment-alert">
          <FontAwesomeIcon icon={faComment}/>
          <p>Đăng nhập để bình luận</p>
        </div>
        <div className="post-comment-type-box">
          <div className="comment-current-user">
            <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
            alt="" className="comment-current-user-avatar" />
            <p className="comment-current-user-name">xuanduong</p>
          </div>
          <textarea className="comment-type-box" type="text" placeholder="Viết bình luận..."
          value ={inputComment}
          onChange={onChangeInput}/>
          <button onClick={postComment} className="comment-send-btn active">Bình luận</button>
          <button onClick={cancelComment} className="comment-send-btn">Hủy</button>
        </div>
        {listComment.length==0
        ?(<h3>Chưa có bình luận nào</h3>)
        :(listComment.length>0)?
          (
            <ul className="post-comment-list">
              {listComment.map(comment=>(
                <CommentItem post={amountCmt} comment={comment} 
                author={getInfoUser(comment.idUser)}
                deleteComment={()=>{handleDeleteComment(comment._id)}}/>
              ))}
            
          </ul>
          )
          :(<h3> </h3>)
        }

      </div>
    </Wrapper>
  )
}

export default PostComment;

const Wrapper = styled.div`

  .post-comment-container{
    width: 100%;
    border-top: 1px solid var(--shadow-color);
    text-align: left;
  }

  .post-comment-alert{
    border: 1px solid var(--shadow-color);
    color: var(--shadow-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    padding: 12px 0;
    margin-top: 12px;

    svg{
      margin-right: 12px;
    }
  }

  .post-comment-type-box{
    width: 100%;
    border: 1px solid var(--shadow-color);
    border-radius: 8px;
    padding: 12px;
    box-sizing: border-box;
    text-align: right;
    margin-top: 12px;
    
  }

  .comment-current-user{
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    width: 100%;
  }
  .comment-current-user-avatar{
    height: 36px; 
    width: 36px;
    border-radius: 50%; 
    margin-right: 12px;
  }

  .comment-current-user-name{
    margin: 0;
  }

  .comment-type-box{
    border: 1px solid var(--shadow-color);
    border-radius: 4px;
    outline: none;
    padding: 8px;
    min-height: 60px;
    min-width: 100%;
    box-sizing: border-box;
    resize: none;
    height: max-content;
  }      
  
  .comment-send-btn{
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

  .comment-send-btn.active{
    background-color: var(--hightlight-color);
  }

  .post-comment-list{
    list-style: none;
    padding: 0;
    margin: 12px 0;
    width: 100%;
  }


  /* small desktop*/
  @media (max-width: 1279px) and (min-width: 769px) {
    

  }

  /* tablet large phone*/
  @media (max-width: 768px) and (min-width: 481px) {

  }

  /* small phone */
  @media (max-width: 480px) {

  }

`