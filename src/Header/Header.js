import './HeaderStyle.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Header(){
    return (    
        <React.Fragment>
          <div className="header-container">
            <div className="header-bar">
              <h1>BlogZ</h1>
              <div id="search-container">
                <input type="text" />
                <button id="search-btn">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div> 
              <div id="user-container">
                <a href="" id="signup-btn">
                  Đăng nhập/ Đăng ký
                </a>
              </div>
            </div>
          </div>                                    
        </React.Fragment>
    )
}

export default Header;