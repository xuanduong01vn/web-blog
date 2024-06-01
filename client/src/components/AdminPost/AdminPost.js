import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,
          faPen,
          faBell
 } from '@fortawesome/free-solid-svg-icons';

function AdminPost(){
  return (
    <Wrapper>
      <div className="dashboard-post-container">
        <div className="dashboard-add-new">
          <h3>Quản lý bài viết</h3>
          <a href="" target="_blank" className="dashboard-new-btn">Thêm mới</a>
        </div>
        
        <div className="dashboard-post-filter">
          <ul className="post-filter-list">
            <li className="post-filter-item active">Tất cả</li>
            <li className="post-filter-item">Đang hoạt động</li>
            <li className="post-filter-item">Đã xóa</li>
          </ul>
        </div>
        
        <table className="dashboard-post-table">
          <thead>
            <th>
              Tiêu đề bài viết
            </th>
            <th>
              Tác giả
            </th>
            <th>
              Trạng thái
            </th>
            <th>
              
            </th>
          </thead>
          <tbody>
            <td>
              React basic
            </td>
            <td>
              Xuân dương
            </td>
            <td>
              Công khai
            </td>
            <td>
              <button className='read-post-btn'>
                Chi tiết
              </button>
            </td>
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default AdminPost;

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

  .post-filter-list{
    display: flex;
    justify-content: left;
    background-color: var(--primary-color);
  }

  .post-state-filter{
    outline: none;
    padding: 4px 12px;
    
  }

  .post-filter-item{
    border-bottom: 4px solid transparent;
    transition: var(--hightlight-color);
    font-size: 18px;
    cursor: pointer;
    padding: 4px 12px;
  }

  .post-filter-item:hover{
    color: var(--hightlight-color);
  }

  .post-filter-item.active{
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

  thead th:nth-child(1){
    width: 50%;
  }

  thead th:nth-child(3){
    width: 10%;
  }

  thead th:last-child{
    width: 60px;
  }

  .read-post-btn{
    background-color: var(--hightlight-color); 
    padding: 8px;
    border-radius: 8px;
    color: white;
    transition: var(--transition-time);
  }

  .read-post-btn:hover{
    background-color: var(--shadow-color); 
    color: black;
  }

`
