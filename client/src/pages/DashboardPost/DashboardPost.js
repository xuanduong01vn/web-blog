import styled from "styled-components";
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera,
} from '@fortawesome/free-solid-svg-icons';

import HeaderAdmin from "../../components/Header/HeaderAdmin";
import AdminLayout from "../../components/AdminLayout/AdminLayout";
import AdminPost from "../../components/AdminPost/AdminPost.js";

function DashboardPost(){
  document.title="Dashboard admin";

  return (
    <Wrapper>
      <div className="dashboard-admin-container">
        <HeaderAdmin/>
        <div className="dashboard-admin-content">
          <AdminLayout/>
          <AdminPost/>
        </div>
      </div>

    </Wrapper>
  )
}

export default DashboardPost;

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