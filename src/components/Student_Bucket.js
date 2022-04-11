import * as React from 'react';
import './Manage.css';
import SideBar from './views/StudentHeader';
import BucketTableBox from './views/BucketTableBox'
import StudentTimeTable from './views/StudentTimeTable'
import styled from "styled-components";
import * as BsIcons from 'react-icons/bs';
import { Container } from '@mui/material';
import { AiOutlineUser, AiTwotoneHome } from "react-icons/ai";

const Info = styled.h1``;


function StudentBucket() {
  return (
    <div>
        <SideBar></SideBar>
        <div class="top_bar">
            <div class="title"><h1>장바구니 신청</h1></div>
          <div class="bar_options">
            <div class="User"><AiOutlineUser size={35}/></div>
            <div class="Logout"><input type='button' class='Logout_button' value='LogOut' onClick={() => window.location.href = "../"}/></div>
            <div class="Message"><BsIcons.BsEnvelopeFill size={35}/></div>
            <div class="Home"><AiTwotoneHome size={35} onClick={() => window.location.href = "../"}/></div>
          </div>
        </div>
        <Container>
          <div>
            <BucketTableBox></BucketTableBox>
            <StudentTimeTable></StudentTimeTable>
          </div>
        </Container>
    </div>
  );
}


export default StudentBucket
