import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import axios from 'axios';
import PostItem from "../PostItem/PostItem.js";


function PostList(props){

  const { idUser } = props;
  const [postList, setPostList] = useState(null);
  const [authorList, setAuthorList] = useState(null);

  useEffect(()=>{
    const getDataPost = async () => {
      try {
        const response = await axios.get("http://localhost:9999/posts/");
        return response.data;
      } catch (err) {
        console.log("Error fetching posts:", err.message);
        return [];
      }
    };
    getDataPost()
    .then((data) => {
      if(!idUser){
        setPostList(data || []);
      }
      else{
        setPostList(data.filter((item)=>item.idAuthor==idUser));
      }
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

  return(
    <Wrapper>
      <div id="blog-list-container">
        
          {postList && postList.length===0 &&
          (  
            <div className="blog-list-alert">
              <span>Chưa có bài viết nào</span>
            </div>
          )}
          {postList && postList.length>0 &&
          (<ul className="blog-list-box">
            {
              postList.map((post, index)=>(
                <li key={post._id || index} className="blog-item">
                  <PostItem post={post} author={author.find(acc=>acc._id==post.idAuthor)}/>
                </li>
              )
            )
            }
          </ul>
          )}
      </div>
    </Wrapper>
  )
}

export default PostList;

const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  box-sizing: border-box;
  margin-right: 18px;
  text-align: left;

  .blog-list-box{
    list-style: none;
    margin: 0%;
    padding: 0;
  }

  .blog-list-alert{
    width: 100%;
    border: 1px solid var(--shadow-color);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    font-size: 24px;
    color: var(--shadow-color);
  }

  .blog-item{
    margin-bottom: 16px;

    &:last-child{
      margin-bottom: 0;
    }
  }

  /* small desktop*/
  @media (max-width: 1279px) and (min-width: 769px) {


  }

  /* tablet large phone*/
  @media (max-width: 768px) and (min-width: 481px) {
    min-width: 100%;
    margin-right: 0;
  }

  /* small phone */
  @media (max-width: 480px) {
    min-width: 100%;
    margin-right: 0;
  }
  

  
`