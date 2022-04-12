import * as React from 'react';
import './Manage.css';
import SideBar from './views/Manage_Header';
import styled from "styled-components";
import * as BsIcons from 'react-icons/bs';
import { Container } from '@mui/material';
import { AiOutlineUser, AiTwotoneHome, AiFillCarryOut } from "react-icons/ai";
import AppFooter from './views/AppFooter';
import withRoot from './withRoot';

const Info = styled.h1``;

function ManagePeriod() {
  return (
    <div>
        <SideBar></SideBar>
        <div class="top_bar">
            <div class="title"><h1>수강신청 기한 설정</h1></div>
          <div class="bar_options">
            <div class="User"><AiOutlineUser size={35}/></div>
            <div class="Logout"><input type='button' class='Logout_button' value='LogOut' onClick={() => window.location.href = "../"}/></div>
            <div class="Message"><BsIcons.BsEnvelopeFill size={35}/></div>
            <div class="Home"><AiTwotoneHome size={35} onClick={() => window.location.href = "../"}/></div>
          </div>
        </div>
        <Container>
        <div class="Input_period">
            <form>
                <AiFillCarryOut size={30}/>
                <div class="Period_title">장바구니 기간</div>
                <div class="Period_start"><input type="datetime-local"/></div> 
                <div class="Period_blank"><text>~</text></div> 
                <div class="Period_end"><input type="datetime-local"/></div> 
                <div class="Period_submit"><input type="submit" value="확인"/></div> 
            </form>
            </div>
            <div class="Input_period">
            <form>
                <AiFillCarryOut size={30}/>
                <div class="Period_title">수강신청 기간</div>
                <div class="Period_start"><input type="datetime-local"/></div> 
                <div class="Period_blank"><text>~</text></div> 
                <div class="Period_end"><input type="datetime-local"/></div> 
                <div class="Period_submit"><input type="submit" value="확인"/></div> 
            </form>
            </div>
            <div class="Input_period">
            <form>
                <AiFillCarryOut size={30}/>
                <div class="Period_title">수강정정 기간</div>
                <div class="Period_start"><input type="datetime-local"/></div> 
                <div class="Period_blank"><text>~</text></div> 
                <div class="Period_end"><input type="datetime-local"/></div> 
                <div class="Period_submit"><input type="submit" value="확인"/></div> 
            </form>
            </div>
            <div class="Input_period">
            <form>
                <AiFillCarryOut size={30}/>
                <div class="Period_title">수강취소 기간</div>
                <div class="Period_start"><input type="datetime-local"/></div> 
                <div class="Period_blank"><text>~</text></div> 
                <div class="Period_end"><input type="datetime-local"/></div> 
                <div class="Period_submit"><input type="submit" value="확인"/></div> 
            </form>
            </div>
        </Container>
        <AppFooter></AppFooter>
    </div>
  );
}


export default withRoot(ManagePeriod)