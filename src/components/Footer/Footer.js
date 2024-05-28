import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,
  faGithub
 } from '@fortawesome/free-brands-svg-icons';

 import { faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

// function presentYear(){
//   let y=Date().getFullYear();
//   document.querySelector('.year-present').innerHTML=`© ${y} xuanduong01vn`;
// }

// presentYear();

function Footer(){
  return (
    <Wrapper>
      <div className="footer-container">
        <div className="footer-col">
          <h1 className='footer-title'>BlogX</h1>
          <p className='year-present'>© 2024 xuanduong01vn</p>
        </div>
        <div className="footer-col">
          <ul className="footer-list">
            <li className="footer-item"> <a target="_blank" href="" className="footer-link">Chính sách</a></li>
            <li className="footer-item"><a target="_blank" href="" className="footer-link">Quyền lợi</a></li>
            <li className="footer-item"><a target="_blank" href="" className="footer-link">Đóng góp</a></li>
            <li className="footer-item"><a target="_blank" href="" className="footer-link">Trợ giúp</a></li>
          </ul>
        </div>
        <div className="footer-col">
        <ul className="footer-list">
            <li className="footer-item">
              <a target="_blank" href="https://www.facebook.com/xuanduong01vn" className="footer-link">
                <FontAwesomeIcon icon={faFacebook}/>Xuan Duong
              </a>
            </li>
            <li className="footer-item">
              <a target="_blank" href="tel:+84353434036" className="footer-link">
                <FontAwesomeIcon icon={faPhone} />0353434036
              </a>
            </li>
            <li className="footer-item">
              <a target="_blank" href="mailto:xuanduong01vn@gmail.com" className="footer-link">
                <FontAwesomeIcon icon={faEnvelope} />xuanduong01vn@gmail.com
              </a>
            </li>
            <li className="footer-item">
              <a target="_blank" href="https://github.com/xuanduong01vn" className="footer-link">
                <FontAwesomeIcon icon={faGithub} />https://github.com/xuanduong01vn
              </a>
              </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.div`
  background-color: var(--primary-color);
  padding: 0;
  margin-top: 60px;
  width: 100vw;
  bottom: 0;
  color: var(--text-color);
  padding: 40px 0;
  font-weight: 600;

  .footer-container{
    
    width: var(--general-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .footer-col{
    width: calc(100%/3);
    text-align: left;
  }

  .footer-title{
    margin: 0;
    color: var(--shadow-color);
    font-weight: 800;
    font-size: 60px;
    text-shadow: 
      -1px -1px 0 var(--text-color),  
      1px -1px 0 var(--text-color),
      -1px 1px 0 var(--text-color),
      1px 1px 0 var(--text-color);
  }

  .footer-list{
    list-style: none;
  }

  .footer-item {
    height: 40px;
    padding: 4px;
    box-sizing: border-box;
  }
  
  

  .footer-link{
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: center;
    transition: var(--transition-time);

    svg{
      margin-right: 12px;
      height: 24px;

    }

    &:hover{
      color: var(--shadow-color);
    }
  }
`