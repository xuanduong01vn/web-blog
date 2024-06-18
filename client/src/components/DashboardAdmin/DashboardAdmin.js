import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import ReactPaginate from 'react-paginate';

const itemsPerPage = 10;

function DashboardAdmin(){
  const [accList, setAccList] = useState([]);
  const [stateAccount, setStateAccount] = useState("all");
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentAccs, setCurrentAccs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  function handleStateAccount(state){
    setStateAccount(state);
    if(state=="all"){
      setCurrentAccs(accList);
    }else if(state=="deleted"){
      setCurrentAccs(accList.filter(acc=>acc.isDeleted==true));
    }else if(state=="active"){
      setCurrentAccs(accList.filter(acc=>acc.isDeleted==false));
    }
    setCurrentPage(0);
    setItemOffset(0);
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
      setAccList(data || []);
      setCurrentAccs(data);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },[]); 

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(currentAccs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(currentAccs?.length / itemsPerPage));
  }, [itemOffset, currentAccs, stateAccount]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % accList.length;
    setItemOffset(newOffset);
    setCurrentPage(e.selected);
  };

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
          <h3>Quản lý người dùng</h3>
          {/* <a href="/dashboard/new-admin" target="_blank" className="dashboard-new-btn">Thêm mới</a> */}
        </div>
        
        <div className="dashboard-filter">
          <ul className="dashboard-filter-list">
            <li onClick={()=>handleStateAccount("all")} 
            className={stateAccount=="all"?"dashboard-filter-item active":"dashboard-filter-item"} 
            >Tất cả {`(${accList?.length})`}</li>
            <li onClick={()=>handleStateAccount("active")} 
            className={stateAccount=="active"?"dashboard-filter-item active":"dashboard-filter-item"}
            >Đang hoạt động {`(${accList.filter(acc=>acc.isDeleted==false)?.length})`}</li>
            <li onClick={()=>handleStateAccount("deleted")} 
            className={stateAccount=="deleted"?"dashboard-filter-item active":"dashboard-filter-item"}
            >Đã xóa {`(${accList.filter(acc=>acc.isDeleted==true)?.length})`}</li>
          </ul>
        </div>
        
        <div className="data-table">
        <table className="dashboard-post-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên tài khoản</th>
              <th>Tên hiển thị</th>
              <th>Email</th>
              <th> Ngày tạo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

          
          {currentItems.map((acc, index)=>(
              <tr key={index}>
                <td>{itemOffset+index+1}</td>
                <td>@{acc.username} </td>
                <td>{acc.fullname}</td>
                <td>{acc.email}</td>
                <td>{formatTime(acc.createAt)}</td>
                <td>
                  <a href={`user/${acc._id}`} className='detail-item-btn'>
                    Chi tiết
                  </a>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        </div>
        

        {currentAccs.length>itemsPerPage &&
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          forcePage={currentPage}
          renderOnZeroPageCount={null}
        />
        }
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

  .data-table{
    min-height: 540px;
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

  tr:nth-child(even){
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