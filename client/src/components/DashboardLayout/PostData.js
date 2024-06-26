import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { vi } from 'date-fns/locale';
import ReactPaginate from 'react-paginate';

const itemsPerPage = 10;

function PostData(props){
  const {posts, authors} = props;

  const [postList, setPostList] = useState([]);
  const [authorList, setAuthorList] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPosts, setCurrentPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(0);


  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % postList.length;
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
      <div className='data-table'>
        <table className='dashboard-post-table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Tiêu đề bài viết</th>
              <th>Người viết</th>
              <th>Ngày viết</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
        <tbody>
          {posts.map((post,index) =>(
            <tr key={index}>
              <td>{itemOffset+index+1}</td>
              <td>{post.title}</td>
              <td>{authors.find(acc=>acc._id==post.idAuthor).username}</td>
              <td>{formatTime(post.createAt)}</td>
              <td>{post.isDeleted?
                <span className='red-asterisk'>Đã xóa</span>
                :<span className='success-alert'>Đang hoạt động</span>}
              </td>
              <td>
                <a href={`post/${post._id}`} className='detail-item-btn'>
                  Chi tiết
                </a>
              </td>
            </tr>
          ) )
        }
        </tbody>
      </table>
      </div>
      {posts.length>itemsPerPage &&
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
    </Wrapper>
  )
}

export default PostData;

const Wrapper = styled.div`

`


