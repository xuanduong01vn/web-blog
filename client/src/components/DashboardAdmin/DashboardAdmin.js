import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,
          faPen,
          faBell
} from '@fortawesome/free-solid-svg-icons';

function DashboardAdmin(){
  return (
    <Wrapper>
      <div className="dashboard-post-container">
        <div className="dashboard-add-new">
          <h3>Quản lý quản trị viên</h3>
          <a href="/dashboard/new-admin" target="_blank" className="dashboard-new-btn">Thêm mới</a>
        </div>
        
        <div className="dashboard-filter">
          <ul className="dashboard-filter-list">
            <li className="dashboard-filter-item active">Tất cả</li>
            <li className="dashboard-filter-item">Đang hoạt động</li>
            <li className="dashboard-filter-item">Đã xóa</li>
          </ul>
        </div>
        
        <table className="dashboard-post-table">
          <thead>
            <th>
              Tên tài khoản
            </th>
            <th>
              Tên hiển thị
            </th>
            <th>
              Email
            </th>
            <th>
              Ngày tạo
            </th>
            <th>
              
            </th>
          </thead>
          <tbody>
            <td>
              @admin01
            </td>
            <td>
              QTV01
            </td>
            <td>
              admin01@gmail.com
            </td>
            <td>
              2024
            </td>
            <td>
              <button className='detail-item-btn'>
                Chi tiết
              </button>
            </td>
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default DashboardAdmin;

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

  thead th:nth-child(1),
  thead th:nth-child(2),
  thead th:nth-child(3){
    width: 15%;
  }

  thead th:nth-child(4){
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