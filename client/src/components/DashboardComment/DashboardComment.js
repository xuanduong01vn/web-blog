import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

function DashboardComment(){
  const [cmtList, setCmtList] = useState([]);
  const [accList, setAccList] = useState([]);
  const [stateCmt, setStateCmt] = useState("all");

  function handleStateCmt(state){
    setStateCmt(state);
  }

  useEffect(()=>{
    const getDataCmt = async () => {
      try {
        const response = await axios.get("http://localhost:9999/comments");
        return response.data;
      } catch (err) {
        console.log("Error fetching authors:", err.message);
        return [];
      }
    };
    getDataCmt()
    .then((data) => {
      setCmtList(data || []);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },[]); 

  useEffect(()=>{
    const getDataAcc = async () => {
      try {
        const response = await axios.get("http://localhost:9999/accounts");
        return response.data;
      } catch (err) {
        console.log("Error fetching authors:", err.message);
        return [];
      }
    };
    getDataAcc()
    .then((data) => {
      setAccList(data || []);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },[]); 

  const now= new Date();
  function formatTime(time){
    if(now.getFullYear()== new Date(time).getFullYear()){
      return format(new Date(time), 'HH:mm, EEEE, dd MMM', { locale: vi });
    }
    else{
      return format(new Date(time), 'HH:mm, EEEE, dd MMM yyyy', { locale: vi });
    }
  }
  
  return (
    <Wrapper>
      <div className="dashboard-post-container">
        <div className="dashboard-add-new">
          <h3>Quản lý bình luận</h3>
        </div>
        
        <div className="dashboard-filter">
          <ul className="dashboard-filter-list">
          <li onClick={()=>handleStateCmt("all")} className={stateCmt=="all"?"dashboard-filter-item active":"dashboard-filter-item"} >Tất cả</li>
            <li onClick={()=>handleStateCmt("active")} className={stateCmt=="active"?"dashboard-filter-item active":"dashboard-filter-item"}>Đang hoạt động</li>
            <li onClick={()=>handleStateCmt("deleted")} className={stateCmt=="deleted"?"dashboard-filter-item active":"dashboard-filter-item"}>Đã xóa</li>
          </ul>
        </div>
        
        <table className="dashboard-post-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nội dung bình luận</th>
              <th>Người bình luận</th>
              <th>Trạng thái</th>
              <th>Ngày tạo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          
          {(stateCmt=="active") && (
            cmtList?.filter(cmt=>cmt.isDeleted==false).map((cmt, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{cmt.content} </td>
                <td>@{accList.find(acc=>acc._id==cmt.idUser)?.username}</td>
                <td>{cmt.isDeleted?"Đã xóa":"Đang hoạt động"}</td>
                <td>{formatTime(cmt.createAt)}</td>
                <td>
                  <a href="" className='detail-item-btn'>
                    Chi tiết
                  </a>
                </td>
              </tr>
            ))
          )}
          {(stateCmt=="deleted") && (
            cmtList?.filter(cmt=>cmt.isDeleted==true).map((cmt, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{cmt.content} </td>
                <td>@{accList.find(acc=>acc._id==cmt.idUser)?.username}</td>
                <td>{cmt.isDeleted?"Đã xóa":"Đang hoạt động"}</td>
                <td>{formatTime(cmt.createAt)}</td>
                <td>
                  <a href="" className='detail-item-btn'>
                    Chi tiết
                  </a>
                </td>
              </tr>
            ))
          )}
          {(stateCmt=="all") && (
            cmtList?.map((cmt, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{cmt.content} </td>
                <td>@{accList.find(acc=>acc._id==cmt.idUser)?.username}</td>
                <td>{cmt.isDeleted?"Đã xóa":"Đang hoạt động"}</td>
                <td>{formatTime(cmt.createAt)}</td>
                <td>
                  <a href="" className='detail-item-btn'>
                    Chi tiết
                  </a>
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

export default DashboardComment;

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
    min-width: 60px;
    box-sizing: border-box;
  }

  thead th:nth-child(2),
  thead th:nth-child(3),
  thead th:nth-child(4),
  thead th:nth-child(5){
    width: 25%;
  }

  thead th:last-child{
    min-width: 84px;
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
    color: black;
  }

`