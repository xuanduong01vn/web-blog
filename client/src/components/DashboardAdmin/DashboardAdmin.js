import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DashboardAdmin(){
  const [adminList, setAdminList] = useState(null);
  const [stateAccount, setStateAccount] = useState("all");

  function handleStateAccount(state){
    setStateAccount(state);
  }

  useEffect(()=>{
    const getDataAdmin = async () => {
      try {
        const response = await axios.get("http://localhost:9999/accounts/?idTypeAccount=1");
        return response.data;
      } catch (err) {
        console.log("Error fetching authors:", err.message);
        return [];
      }
    };
    getDataAdmin()
    .then((data) => {
      setAdminList(data || []);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },[]); 

  return (
    <Wrapper>
      <div className="dashboard-post-container">
        <div className="dashboard-add-new">
          <h3>Quản lý quản trị viên</h3>
          <a href="/dashboard/new-admin" target="_blank" className="dashboard-new-btn">Thêm mới</a>
        </div>
        
        <div className="dashboard-filter">
          <ul className="dashboard-filter-list">
          <li onClick={()=>handleStateAccount("all")} className={stateAccount=="all"?"dashboard-filter-item active":"dashboard-filter-item"} >Tất cả</li>
            <li onClick={()=>handleStateAccount("active")} className={stateAccount=="active"?"dashboard-filter-item active":"dashboard-filter-item"}>Đang hoạt động</li>
            <li onClick={()=>handleStateAccount("deleted")} className={stateAccount=="deleted"?"dashboard-filter-item active":"dashboard-filter-item"}>Đã xóa</li>
          </ul>
        </div>
        
        <table className="dashboard-post-table">
          <thead>
            <tr>
              <th>Tên tài khoản</th>
              <th>Tên hiển thị</th>
              <th>Email </th>
              <th>Ngày tạo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          
          {(stateAccount=="active") && (
            adminList?.filter(acc=>acc.isDeleted==false).map((acc, index)=>(
              <tr key={index}>
                <td>@{acc.username} </td>
                <td>{acc.fullname}</td>
                <td>{acc.email}</td>
                <td>{acc.createAt}</td>
                <td>
                  <button className='detail-item-btn'>
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))
          )}
          {(stateAccount=="deleted") && (
            adminList?.filter(acc=>acc.isDeleted==true).map((acc, index)=>(
              <tr key={index}>
                <td>@{acc.username} </td>
                <td>{acc.fullname}</td>
                <td>{acc.email}</td>
                <td>{acc.createAt}</td>
                <td>
                  <button className='detail-item-btn'>
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))
          )}
          {(stateAccount=="all") && (
            adminList?.map((acc, index)=>(
              <tr key={index}>
                <td>@{acc.username} </td>
                <td>{acc.fullname}</td>
                <td>{acc.email}</td>
                <td>{acc.createAt}</td>
                <td>
                  <button className='detail-item-btn'>
                    Chi tiết
                  </button>
                </td>
              </tr>
            ))
          )}
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