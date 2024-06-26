import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

function DashboardFilter(props){
  const {state, posts} = props;
  const [statePost, setStatePost] = useState(state);
  const [postList, setPostList] = useState([]);

  console.log(state);

  function handleStatePost(states){
    setStatePost(states);
    // if(state=='all'){
    //   setCurrentPosts(postList);
    // }else if(state=='deleted'){
    //   setCurrentPosts(postList.filter(post=>post.isDeleted==true));
    // }else if(state=='active'){
    //   setCurrentPosts(postList.filter(post=>post.isDeleted==false));
    // }
  }

  return (
    <Wrapper>
      <div className='dashboard-filter'>
        <ul className='dashboard-filter-list'>
          <li onClick={()=>handleStatePost('all')} 
          className={statePost=='all'?'dashboard-filter-item active':'dashboard-filter-item'}>
            <Link className='filter-item-link' to='/dashboard/posts'>Tất cả {`(${posts?.length})`}</Link>
          </li>
          <li onClick={()=>handleStatePost('active')} 
          className={statePost=='active'?'dashboard-filter-item active':'dashboard-filter-item'}>
            <Link className='filter-item-link' to='/dashboard/posts/?isDeleted=false'>Đang hoạt động {`(${posts.filter(post=>post.isDeleted==false)?.length})`}</Link>
          </li>
          <li onClick={()=>handleStatePost('deleted')} 
          className={statePost=='deleted'?'dashboard-filter-item active':'dashboard-filter-item'}>
            <Link className='filter-item-link' to='/dashboard/posts/?isDeleted=true'>Đã xóa {`(${posts.filter(post=>post.isDeleted==true)?.length})`}</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

export default DashboardFilter;

const Wrapper = styled.div`

`


