import styled from 'styled-components';
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import ReactPaginate from 'react-paginate';

const itemsPerPage = 10;

function DashboardPost(){
  const [postList, setPostList] = useState([]);
  const [authorList, setAuthorList] = useState([]);
  const [statePost, setStatePost] = useState('all');
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  

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

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % postList.length;
    setItemOffset(newOffset);
    setCurrentPage(e.selected);
  };

  useEffect(()=>{
    const getDataAuthor = async () => {
      try {
        const response = await axios.get('http://localhost:9999/accounts/');
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

  if(authorList && postList){
    author = authorList.filter(account => postList.some(post => post.idAuthor === account._id));
    
  }

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
          <h3>Quản lý bài viết</h3>
          {/* <a href='' target='_blank' className='dashboard-new-btn'>Thêm mới</a> */}
        </div>
        
        {currentPosts.length>itemsPerPage &&
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

export default DashboardPost;

const Wrapper = styled.div`

`
