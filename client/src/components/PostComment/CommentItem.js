import styled from "styled-components";
import React, {useEffect, useState } from "react";
import axios from 'axios';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

import PostReply from "./PostReply";
import ReplyItem from "./ReplyItem";

function CommentItem(props){

  const {comment, author, deleteComment, post} =props;
  const [amountCmt, setAmountCmt] = useState(post);
  const [classInput, setClassInput] = useState(null);
  const [activeReply, setActiveReply]=useState(false);
  const [inputComment, setInputComment] = useState('');
  const [replies, setReplies] =useState([]);
  const [listUser, setListUser] =useState([]);
  const [valueComment, setValueComment] = useState({
    content: '',
    idUser: '66669b9c646d48fe74ba397b',
    idPost: comment.idPost,
    createAt: new Date(),
    idParent: '',
    isDeleted: false,
  });

  console.log(amountCmt);

  useEffect(()=>{
    if(comment.content.lenght>0){
      setInputComment(comment.content);
    }
  },[comment.content.lenght]);

  useEffect(()=>{
    const getReplies = async(req,res)=>{
      try {
        const response = await axios.get(`http://localhost:9999/comments?idParent=${comment._id}&sort=asc`);
        return response.data;
      } catch (err) {
        console.log(err.message);
      }
    }
    getReplies()
    .then(data=>{
      setReplies(data);
    })
    .catch(err=>{
      console.log(err.message);
    })
  },[post.amountComment]);

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

  function onReloadReplies(amount){
    setAmountCmt(amount);
  }
  
  function openReplyBox(e){
    if(activeReply==false)
      setActiveReply(true);
  }

  function closeReplyBox(e){
      setActiveReply(false);
  }

  function onChangeValue(e){
    setInputComment(e.target.value);
  }

  const now = new Date();
  function formatTime(time){  
    if(time?.length>0){
      if(now.getFullYear()== new Date(time).getFullYear()){
        return format(new Date(time), 'HH:mm, dd MMM', { locale: vi });
      }
      else{
        return format(new Date(time), 'HH:mm, dd MMM yyyy', { locale: vi });
      }
    }
  }

  function onEditComment(id){
    setClassInput(id);
    setInputComment(comment.content);
  }

  function handleEditComment(idCmt){
    if(inputComment.length>0){
      axios.put(`http://localhost:9999/comments/${idCmt}`,{content: inputComment})
      .then(res=>{
        comment.content=res.data.data.content;
        setClassInput(null);
      })
      .catch(err=>{
        console.log(err.message);
      })
    }
    
  }

  return(
    <Wrapper>
      {comment.isDeleted
      ?(<li key={comment._id} className="post-comment-item">
        <div className="comment-item-created">
            <img src={author?.avatar} 
            alt="" className="comment-item-user-avatar" />
            <div className="comment-item-user-created">
              <a href={`/user/${comment.idUser}`} className="comment-item-username">{author?.username}</a>
              <span className="comment-item-created-time"> bình luận lúc {formatTime(comment.createAt)}</span>
            </div>
          </div>
          <div className="comment-item-content">
            <span style={{color:"var(--shadow-color)"}}>Bình luận này đã bị xóa!</span>
          </div>
      </li>)
      :(
        <li key={comment._id} className="post-comment-item">
          <div className="comment-item-created">
            <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
            alt="" className="comment-item-user-avatar" />
            <div className="comment-item-user-created">
              <a href={`/user/${comment.idUser}`} className="comment-item-username">{author?.username}</a>
              <span className="comment-item-created-time"> bình luận lúc {formatTime(comment.createAt)}</span>
            </div>
          </div>
          <div className="comment-item-content">
            {classInput==comment._id 
            ?(<textarea autoFocus tabIndex={inputComment.length}
              className="comment-content-box"
              value={inputComment}
              onChange={e=>onChangeValue(e)}
              />)
            :(<p>{comment.content}</p>)
            }
            
          </div>
          {classInput != comment._id
            ?(<div className="comment-item-action">
                <button className="comment-item-btn active"
                onClick={openReplyBox}>
                  Trả lời
                </button>
                <button onClick={()=>{onEditComment(comment._id)}} className="comment-item-btn">
                  Sửa
                </button>
                <button 
                onClick={()=>{deleteComment()}} 
                className="comment-item-btn">
                  Xóa
                </button>
              </div>)
            :(<div className="comment-item-action">
                <button className="comment-item-btn"
                onClick={()=>setClassInput(null)}>
                  Hủy
                </button>
                <button onClick={()=>{handleEditComment(comment._id)}} className={inputComment.trim().length>0?"comment-item-btn active":"comment-item-btn disable"}>
                  Lưu
                </button>
              </div>
            )
          }
          
          {activeReply && 
            <PostReply 
            parent={comment} 
            openReply={closeReplyBox} 
            author={author}
            post={post}
            onLoad={onReloadReplies}/>}
          
          <ul className="post-reply-list">
          {replies.map(rep=>(
            <ReplyItem 
            key={rep._id}
            reply={rep} 
            user={getInfoUser(rep.idUser)}/>
          ))}
          </ul>
          
        </li>
      )  
      }
        
    </Wrapper>
  )
}

export default CommentItem;

const Wrapper = styled.div`
  margin-bottom: 12px;

  .post-comment-item{
    border: 1px solid var(--shadow-color);
    border-radius: 8px;
    outline: none;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
  }

  .comment-content-box{
    margin-top: 8px;
    padding: 8px;
    border: 1px solid var(--shadow-color);
    border-radius: 8px; 
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
    min-width: 100%;
    max-width: 100%;
    min-height: 36px;
    resize: vertical;
  }

  .comment-item-created{
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

  .comment-item-btn:hover,
  .reply-item-btn:hover{
    color: var(--hightlight-color);
  }

  .comment-item-btn.active,
  .reply-item-btn.active{
    color: var(--hightlight-color);
  }

  .comment-item-btn.disable{
    color: var(--shadow-color);
    cursor: default;
  }

  .post-reply-list{
    list-style: none;
    padding: 0 0 0 36px;
    margin-top: 12px;
    width: 100%;
    box-sizing: border-box;
  }

  .post-reply-item{
    border-top: 1px solid var(--shadow-color);
    outline: none;
    padding: 12px 0;
    width: 100%;
    box-sizing: border-box;
  }

  .reply-item-created{
    display: flex;
    align-items: center;
  }
`