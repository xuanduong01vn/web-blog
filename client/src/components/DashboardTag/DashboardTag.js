import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
const itemsPerPage = 10;

function DashboardTag(){
  const [tagList, setTagList] = useState([]);
  const [stateTag, setStateTag] = useState('all');
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentTags, setCurrentTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const query = useParams();

  function handleStateTag(state){
    setStateTag(state);
    if(state=='all'){
      setCurrentTags(tagList);
    }else if(state=='deleted'){
      setCurrentTags(tagList.filter(tag=>tag.isDeleted==true));
    }else if(state=='active'){
      setCurrentTags(tagList.filter(tag=>tag.isDeleted==false));
    }
    setCurrentPage(0);
    setItemOffset(0);
  }

  useEffect(()=>{
    const getDataTag = async () => {
      try {
        var response;
        if(query){
          response = await axios.get(`http://localhost:9999/tags?page=${query}`);
        }
        else{
          response = await axios.get(`http://localhost:9999/tags?page=1`);
        }
        
        return response.data;
      } catch (err) {
        console.log('Error fetching authors:', err.message);
        return [];
      }
    };
    getDataTag()
    .then((data) => {
      setTagList(data);
      setCurrentTags(data);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  },[]); 

  

  console.log(currentTags);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    
    setCurrentItems(currentTags.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(currentTags?.length / itemsPerPage));
  }, [itemOffset, currentTags, stateTag]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % tagList.length;
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
      <div className='dashboard-post-container'>
        <div className='dashboard-add-new'>
          <h3>Quản lý tag</h3>
          {/* <a href='/dashboard/new-admin' target='_blank' className='dashboard-new-btn'>Thêm mới</a> */}
        </div>
        
        <div className='dashboard-filter'>
          <ul className='dashboard-filter-list'>
            <li onClick={()=>handleStateTag('all')} 
            className={stateTag=='all'?'dashboard-filter-item active':'dashboard-filter-item'} 
            >Tất cả {`(${tagList?.length})`}</li>
            <li onClick={()=>handleStateTag('active')} 
            className={stateTag=='active'?'dashboard-filter-item active':'dashboard-filter-item'}
            >Đang hoạt động {`(${tagList.filter(tag=>tag.isDeleted==false)?.length})`}</li>
            <li onClick={()=>handleStateTag('deleted')} 
            className={stateTag=='deleted'?'dashboard-filter-item active':'dashboard-filter-item'}
            >Đã xóa {`(${tagList.filter(tag=>tag.isDeleted==true)?.length})`}</li>
          </ul>
        </div>
        <div className='data-table'>
        <table className='dashboard-post-table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Tên thẻ</th>
              <th>Ngày tạo</th>
              <th></th>
            </tr>
            
          </thead>
          <tbody>
          {
            currentItems.map((tag, index)=>(
              <tr key={index}>
                <td>{itemOffset+index+1}</td>
                <td>{tag.nameTag}</td>
                <td>{formatTime(tag.createAt)}</td>
                <td>
                  <a href='' className='detail-item-btn'>
                    Chi tiết
                  </a>
                </td>
              </tr>
            ))
          }
          {/* {(stateTag=='deleted') && (
            currentItems.map((tag, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{tag.nameTag}</td>
                <td>{formatTime(tag.createAt)}</td>
                <td>
                  <a href='' className='detail-item-btn'>
                    Chi tiết
                  </a>
                </td>
              </tr>
            ))
          )}
          {(stateTag=='all') && (
            currentItems.map((tag, index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{tag.nameTag}</td>
                <td>{formatTime(tag.createAt)}</td>
                <td>
                  <a href='' className='detail-item-btn'>
                    Chi tiết
                  </a>
                </td>
              </tr>
            ))
          )} */}
          </tbody>
        </table>
        </div>
        

        {currentTags.length>itemsPerPage &&
        <ReactPaginate
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel='<'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName='pagination'
          activeClassName='active'
          forcePage={currentPage}
          renderOnZeroPageCount={null}
        />
        }
        
      </div>
    </Wrapper>
  )
}

export default DashboardTag;

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
    max-height: max-content;
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
  thead th:nth-child(3){
    width: 50%;
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