import './HeaderStyle.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,
          faPen,
          faBell
 } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return (    
        <React.Fragment>
          <div className="header-container">
            <div className="header-bar">
              <h1 className="header-title">BlogZ</h1>
              <div id="search-container">
                <input id="search-box" type="text" placeholder='Tìm kiếm trên BlogZ'/>
                <button id="search-btn">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                </button>
              </div> 
              <div id="sign-container">
                <a href="" id="sign-btn">
                  Đăng nhập/ Đăng ký
                </a>
              </div>
              <div className="user-container">
                <button className="new-blog-btn user-btn">
                  <FontAwesomeIcon icon={faPen} className='new-blog-icon user-container-icon'/>
                </button>
                <button className="notify-btn user-btn">
                  <FontAwesomeIcon icon={faBell} className='notify-icon user-container-icon'/>
                </button> 
                <button className="user-bar user-btn">
                  <img src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/07/anh-avatar-dep-cho-con-gai-1.jpg" 
                  alt="user avatar" className="user-image"/>
                  <p className="user-name">username</p>
                  <div id="user-pop-up">
                    <ul className='user-pop-up-list'>
                      <li className='user-pop-up-item'>
                        <a href="" className="user-profile">
                          Trang cá nhân
                        </a>
                      </li>
                      <li className='user-pop-up-item'>
                        <a href="" className="user-blogs">
                          Quản lý bài viết
                        </a>
                      </li>
                      <li className='user-pop-up-item'>
                        <a href="" className="log-out-btn">
                          Đăng xuất
                        </a>
                      </li>
                    </ul>
                  </div>
                </button>
              </div>
            </div>
          </div>                                    
        </React.Fragment>
    )
}

export default Header;