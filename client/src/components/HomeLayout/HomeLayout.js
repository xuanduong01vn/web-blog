import styled from 'styled-components';
import PostList from '../PostList/PostList.js';
import QuestionList from '../QuestionList/QuestionList.js';

function HomeLayout(){
  return (
    <Wrapper>
      <div className="home-content">
        <PostList/>
        <QuestionList/>
      </div>
    </Wrapper>
  )
}

export default HomeLayout;

const Wrapper = styled.div`
  width: 100vw;
  margin: 0;
  margin-top: 80px;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  min-height: 560px;
  

  .home-content{
    width: var(--general-width);
    display: flex;
    justify-content: space-between;
    
  }
`