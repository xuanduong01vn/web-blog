import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';

import DashboardFilter from '../../components/DashboardLayout/DashboardFilter.js';
import PostData from '../../components/DashboardLayout/PostData.js';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera,
} from '@fortawesome/free-solid-svg-icons';

import HeaderDashboard from '../../components/Header/HeaderDashboard.js';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout.js';
import DashboardPost from '../../components/DashboardPost/DashboardPost.js';

const itemsPerPage = 10;

function PageDashboardPost(){
  document.title='Dashboard admin';
  const [postList, setPostList] = useState([]);
  const [authorList, setAuthorList] = useState([]);
  const [statePost, setStatePost] = useState('');
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const location = useLocation();

  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

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

  const queryParams = getQueryParams(location.search);
  const isDeleted = queryParams.get('isDeleted');
  useEffect(()=>{
    if(location.search==''){
      setStatePost('all')
    }
    else if(location.search=='?isDeleted=false'){
      setStatePost('active')
    }
    else if(location.search=='?isDeleted=true'){
      setStatePost('deleted')
    }
  },[location.search])
  

  useEffect(()=>{
    const getDataPost = async () => {
      try {
        const response = await axios.get(`http://localhost:9999/posts/`);
        return response.data;
      } catch (err) {
        console.log('Error fetching posts:', err.message);
        return [];
      }
    };
    getDataPost()
    .then((data) => {
        setPostList(data || []);
        setCurrentPosts(data);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },[]); 

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(currentPosts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(currentPosts?.length / itemsPerPage));
  }, [itemOffset, currentPosts, statePost]);

  useEffect(()=>{
    const getDataAuthor = async () => {
      try {
        const response = await axios.get(`http://localhost:9999/accounts/`);
        return response.data;
      } catch (err) {
        console.log('Error fetching authors:', err.message);
        return [];
      }
    };
    getDataAuthor()
    .then((data) => {
      setAuthorList(data || []);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },[]); 

  let author=[];
  let posts=[];

  if(authorList && postList){
    author = authorList.filter(account => postList.some(post => post.idAuthor === account._id));
  }
  console.log(author);
  console.log(posts);

  return (
    <Wrapper>
      <div className='dashboard-admin-container'>
        <HeaderDashboard/>
        <div className='dashboard-admin-content'>
          <DashboardLayout title='post'/>
            <div className='data-post'>
              <div className='dashboard-filter'>
                <ul className='dashboard-filter-list'>
                  <li onClick={()=>handleStatePost('all')} 
                  className={statePost=='all'?'dashboard-filter-item active':'dashboard-filter-item'}>
                    <Link className='filter-item-link' to='/dashboard/posts'>Tất cả {`(${postList?.length})`}</Link>
                  </li>
                  <li onClick={()=>handleStatePost('active')} 
                  className={statePost=='active'?'dashboard-filter-item active':'dashboard-filter-item'}>
                    <Link className='filter-item-link' to='/dashboard/posts/?isDeleted=false'>Đang hoạt động {`(${postList.filter(post=>post.isDeleted==false)?.length})`}</Link>
                  </li>
                  <li onClick={()=>handleStatePost('deleted')} 
                  className={statePost=='deleted'?'dashboard-filter-item active':'dashboard-filter-item'}>
                    <Link className='filter-item-link' to='/dashboard/posts/?isDeleted=true'>Đã xóa {`(${postList.filter(post=>post.isDeleted==true)?.length})`}</Link>
                  </li>
                </ul>
              </div>
              {location.search=='' && 
                <PostData posts={postList} authors={author}/>
              }
              {
                location.search=='?isDeleted=false' && 
                <PostData posts={postList.filter(post=>post.isDeleted==false)} authors={author}/>
              }
              {
                location.search=='?isDeleted=true' && 
                <PostData posts={postList.filter(post=>post.isDeleted==true)} authors={author}/>
              }
              
            </div>
        </div>
      </div>

    </Wrapper>
  )
}

export default PageDashboardPost;

const Wrapper = styled.div`
  width: 100vw;
  margin-top: 60px;

  .dashboard-admin-container{
    width: 100%;
  }

  .dashboard-admin-content{
    width: 100%;
    display: flex;
  }

  .data-post{
    width: 100%;
    padding: 24px;
  }

  .dashboard-add-new{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  h3{
    margin: 0;
  }
  .dashboard-new-btn{
    background-color: var(--hightlight-color); 
    padding: 8px;
    border-radius: 8px;
    color: white;
    transition: var(--transition-time);
  }

  .dashboard-new-btn:hover{
    background-color: var(--shadow-color); 
    color: black;
  }

  .dashboard-filter-list{
    display: flex;
    justify-content: left;
    background-color: var(--primary-color);
  }

  .post-state-filter{
    outline: none;
    padding: 4px 12px;
  }

  .dashboard-filter-item{
    border-bottom: 4px solid transparent;
    transition: var(--hightlight-color);
    font-size: 18px;
    cursor: pointer;
    padding: 4px 12px;
  }

  .dashboard-filter-item:hover{
    .filter-item-link{
      color: var(--hightlight-color)
    }
  }

  .dashboard-filter-item.active{
    border-bottom: 4px solid var(--hightlight-color);
    color: var(--hightlight-color);

    .filter-item-link{
      color: var(--hightlight-color)
    }
  }

  .data-table{
    min-height: 540px;
  }

  table, th, td{
    border: 1px solid var(--shadow-color);
    border-collapse: collapse;
    padding: 4px 12px;
    height: 40px;
  }
  table{
    width: 100%;
  }

  th{
    background-color: var(--primary-color);
  }

  tr:nth-child(even){
    background-color: var(--primary-color);
  }

  tr td:first-child{
    text-align: center;
  }

  thead th:nth-child(1){
    width: 60px;
    box-sizing: border-box;
  }

  thead th:nth-child(2){
    min-width: 50%;
  }

  thead th:nth-child(3){
    width: 10%;
  }

  thead th:last-child{
    width: 84px;
    box-sizing: border-box;
  }

  .detail-item-btn{
    background-color: var(--hightlight-color); 
    padding: 8px;
    border-radius: 8px;
    color: white;
    transition: var(--transition-time);
    display: block;
    width: max-content;
  }

  .detail-item-btn:hover{
    background-color: var(--shadow-color); 
  }

  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }

  .page-item {
    margin: 0 5px;
    border: 1px solid var(--shadow-color);
    border-radius: 4px;

    &:not(.disabled):hover{
      border: 1px solid var(--hightlight-color);
      opacity: 0.6;
    }

    &:not(.disabled):hover .page-link{
      color: var(--hightlight-color);
    }
  }
 
  .page-link{
    padding: 4px 12px;
    display: block;
  }

  .page-item.active {
    background-color: var(--hightlight-color);
    border: 1px solid var(--hightlight-color);

    &:hover .page-link{
      color: white;
    }

    & .page-link{
      color: white;
    }
  }

  .page-item.disabled {
    cursor: default;
    color: var(--shadow-color);

    & .page-link{
      cursor: default;
      color: var(--shadow-color);
    }
  }

`