import styled from "styled-components";
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera,
} from '@fortawesome/free-solid-svg-icons';

import HeaderDashboard from "../../components/Header/HeaderDashboard.js";
import DashboardLayout from "../../components/DashboardLayout/DashboardLayout.js";
import DashboardPost from "../../components/DashboardPost/DashboardPost.js";

function PageDashboardPost(){
  document.title="Dashboard admin";

  return (
    <Wrapper>
      <div className="dashboard-admin-container">
        <HeaderDashboard/>
        <div className="dashboard-admin-content">
          <DashboardLayout/>
          <DashboardPost/>
        </div>
      </div>

    </Wrapper>
  )
}

export default PageDashboardPost;

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

`