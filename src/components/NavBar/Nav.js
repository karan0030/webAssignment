import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import Avatar from '@material-ui/core/Avatar';
import john from '../../static/images/john.jpg'


import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';





const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;

  }
  .NavHead{
      
      color:#1E60DC;
      font-weight:800;
      font-size:25px;
      width:70px;
      padding-right: 30px;
      font-family: sans-serif;
      margin-left:45px;
      

  }
  .seticon{
      color:#D1D0CE;
      margin-top:20px;
   
      position: absolute;
      
      right: 120px;
      size:2 rem;

  }
  .line: {
    border-left: 6px solid green;
  height: 500px;
  position: absolute;
  left: 50%;
  margin-left: -3px;
  top: 0;
    
  }
  .avatar_css{
    right:40px;
    margin-top:15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <p className="NavHead"> SHAHI</p>
        
        
      </div>
      
      <Menu />
      <SettingsOutlinedIcon className="seticon" />
      <div className="line"></div>
      <Avatar  src={john} className="avatar_css" />
    </Nav>
  )
}

export default Navbar