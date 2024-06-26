import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../../components/Header/HeaderDashboard';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import UserLayout from '../../components/User/User';


function PageDashboardUserDetail(){
  return (
    <Wrapper>
      <div className='dashboard-admin-container'>
        <HeaderAdmin/>
        <div className='dashboard-admin-content'>
          <DashboardLayout/>
          <div className='data-content'>
            <UserLayout/>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default PageDashboardUserDetail;

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