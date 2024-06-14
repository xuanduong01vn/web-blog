import styled from "styled-components";
import React, {useEffect, useState } from "react";
import axios from 'axios';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import PostReply from "./PostReply";

function ReplyItem(props){

  const {reply, user}= props;
  const [classInput, setClassInput] = useState(null);
  const [activeReply, setActiveReply]=useState(false);
  const [inputComment, setInputComment] = useState('');
  const [valueComment, setValueComment] = useState({
    content: '',
    idUser: '66669b9c646d48fe74ba397b',
    idPost: reply.IdPost,
    createAt: new Date(),
    idParent: reply.idParent,
    isDeleted: false,
  });

  function openReplyBox(e){
    if(activeReply==false)
      setActiveReply(true);
  }

  function closeReplyBox(e){
      setActiveReply(false);
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

  return(
    <Wrapper>
      <li className="post-reply-item">
        <div className="reply-item-created">
          <img src={user?.avatar} 
          alt="avatar" className="reply-item-user-avatar" />
          <div className="reply-item-user-created">
            <a href="/user" className="reply-item-username">{user?.username}</a>
            <span className="reply-item-created-time"> trả lời lúc {formatTime(reply.createAt)}</span>
          </div>
        </div>
        <div className="reply-item-content">
          <p>{reply.content}</p>
        </div>
        <div className="reply-item-action">
          <button className="reply-item-btn active"
          onClick={openReplyBox}>
            Trả lời
          </button>
          <button className="reply-item-btn">
            Sửa
          </button>
          <button className="reply-item-btn">
            Xóa
          </button>
        </div>
        {activeReply && <PostReply openReply={closeReplyBox}/>}
      </li>
    </Wrapper>
  )
}

export default ReplyItem;

const Wrapper = styled.div`
`