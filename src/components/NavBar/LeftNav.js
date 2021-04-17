import React from 'react';
import styled from 'styled-components';

import Icon from '@material-ui/core/Icon';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 12px 13px ;
  }
  @media  {
    flex-flow: column nowrap;
    background-color: #1E60DC;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(-100%)'};
    top: 56px;
    left: 0;
    height: 100vh;
    width: 55px;
    padding-top: 1.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #E5E4E2;
      
    }
    li:hover {
       color: #FFF;
       background-color:#2968DD;
      
     }
   
  }
`;

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li><HomeOutlinedIcon /></li>
      <li><DashboardOutlinedIcon /></li>
      <li><DescriptionOutlinedIcon /></li>
      <li><NotificationsNoneOutlinedIcon/></li>
      <li><HelpOutlineOutlinedIcon /></li>
    </Ul>
  )
}

export default LeftNav