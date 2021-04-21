import Avatar from '@material-ui/core/Avatar';
import React from 'react'
import styled from 'styled-components';
import profile from "../../static/images/john.jpg"
import "./avatar.css"


const ProfileLogo =()=>{
    return(
        
         <Avatar  src={profile}  /> 
        
    )
}


export default ProfileLogo