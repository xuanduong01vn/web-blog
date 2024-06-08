import styled from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

function DashboardPost(){


  const [postList, setPostList] = useState(null);
  const [authorList, setAuthorList] = useState(null);
  const [statePost, setStatePost] = useState("all");

  function handleStatePost(state){
    setStatePost(state);
  }

  useEffect(()=>{
    const getDataPost = async () => {
      try {
        const response = await axios.get(`http://localhost:9999/posts/`);
        return response.data;
      } catch (err) {
        console.log("Error fetching posts:", err.message);
        return [];
      }
    };
    getDataPost()
    .then((data) => {
        setPostList(data || []);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },[]);  

  useEffect(()=>{
    const getDataAuthor = async () => {
      try {
        const response = await axios.get("http://localhost:9999/accounts/");
        return response.data;
      } catch (err) {
        console.log("Error fetching authors:", err.message);
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

  if(authorList && postList){
    author = authorList.filter(account => postList.some(post => post.idAuthor === account._id));
    
  }
  console.log(postList);

  return (
    <Wrapper>
      <div className="dashboard-post-container">
      <div className="dashboard-add-new">
          <h3>Quản lý bài viết</h3>
          {/* <a href="" target="_blank" className="dashboard-new-btn">Thêm mới</a> */}
        </div>
        
        <div className="dashboard-filter">
          <ul className="dashboard-filter-list">
            <li onClick={()=>handleStatePost("all")} className={statePost=="all"?"dashboard-filter-item active":"dashboard-filter-item"} >Tất cả</li>
            <li onClick={()=>handleStatePost("active")} className={statePost=="active"?"dashboard-filter-item active":"dashboard-filter-item"}>Đang hoạt động</li>
            <li onClick={()=>handleStatePost("deleted")} className={statePost=="deleted"?"dashboard-filter-item active":"dashboard-filter-item"}>Đã xóa</li>
          </ul>
        </div>
        
        <table className="dashboard-post-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tiêu đề bài viết</th>
              <th>Tác giả</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          
          {(statePost=="active") && (
            postList?.filter(post=>post.isDeleted==false).map((post,index) =>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{post.title}</td>
                <td>{author[index]?.username}</td>
                <td>{post.isDeleted?`Đã xóa`:`Hoạt động`}</td>
                <td>
                  <a href="" className='read-post-btn'>
                    Chi tiết
                  </a>
                </td>
              </tr>
            ) )
          )}

          {(statePost=="deleted") && (
            postList?.filter(post=>post.isDeleted==true).map((post,index) =>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{post.title}</td>
                <td>{author[index]?.username}</td>
                <td>{post.isDeleted?`Đã xóa`:`Hoạt động`}</td>
                <td>
                  <a href="" className='read-post-btn'>
                    Chi tiết
                  </a>
                </td>
              </tr>
            ) )
          )
          }
          {(statePost=="all") &&(
            postList?.map((post,index) =>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{post.title}</td>
                <td>{author[index]?.username}</td>
                <td>{post.isDeleted?`Đã xóa`:`Hoạt động`}</td>
                <td>
                  <a href="" className='read-post-btn'>
                    Chi tiết
                  </a>
                </td>
              </tr>
            ) )
          )
          }
          </tbody>

          
        </table>
      </div>
    </Wrapper>
  )
}

export default DashboardPost;

const Wrapper = styled.div`
  width: 100%;
  padding: 24px;

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
    color: var(--hightlight-color);
  }

  .dashboard-filter-item.active{
    border-bottom: 4px solid var(--hightlight-color);
    color: var(--hightlight-color)
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

  tr td:first-child{
    text-align: center;
  }

  thead th:nth-child(1){
    width: 32px;
  }

  thead th:nth-child(2){
    width: 50%;
  }

  thead th:nth-child(3){
    width: 10%;
  }

  thead th:last-child{
    width: 60px;
  }

  .detail-item-btn{
    background-color: var(--hightlight-color); 
    padding: 8px;
    border-radius: 8px;
    color: white;
    transition: var(--transition-time);
  }

  .detail-item-btn:hover{
    background-color: var(--shadow-color); 
    color: black;
  }

`
