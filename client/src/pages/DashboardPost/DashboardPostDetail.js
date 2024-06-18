import styled from "styled-components";
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera,
} from '@fortawesome/free-solid-svg-icons';

import HeaderDashboard from "../../components/Header/HeaderDashboard.js";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout.js";
import PostContent from "../../components/PostContent/PostContent.js";

function PageDashboardPostDetail(){
  document.title="Dashboard admin";

  return (
    <Wrapper>
      <div className="dashboard-admin-container">
        <HeaderDashboard/>
        <div className="dashboard-admin-content">
          <DashboardLayout/>
          <div className="data-content">
            <PostContent/>
          </div>
          
        </div>
      </div>

    </Wrapper>
  )
}

export default PageDashboardPostDetail;

const Wrapper = styled.div`
  width: 100vw;
  margin-top: 60px;

  .dashboard-admin-container{
    width: 100%;
  }

  .dashboard-admin-content{
    width: 100%;
    display: flex;
  }

  .data-content{
    width: 100%;
    overflow-y: scroll;
    height: calc(100vh - 60px);
  }

`