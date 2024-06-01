import styled from "styled-components";
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera,
} from '@fortawesome/free-solid-svg-icons';

import HeaderAdmin from "../../components/Header/HeaderDashboard";
import AdminLayout from "../../components/DashboardLayout/DashboardLayout";
import GeneralAdmin from "../../components/GeneralAdmin/GeneralAdmin";

function HomeAdmin(){
  document.title="Dashboard admin";

  return (
    <Wrapper>
      <div className="dashboard-admin-container">
        <HeaderAdmin/>
        <div className="dashboard-admin-content">
          <AdminLayout/>
          <GeneralAdmin/>
        </div>
      </div>

    </Wrapper>
  )
}

export default HomeAdmin;

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