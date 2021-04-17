import React, { useState } from 'react';
import styled from 'styled-components';
import LeftNav from './LeftNav';

const StyledMenu = styled.div`
  width: 1.4rem;
  height: 1.3rem;
  position: fixed;
  top: 22px;
  left: 15px;
  z-index: 20;
  display: none;
  @media  {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 1.7rem;
    height: 0.15rem;
    background-color: ${({ open }) => open ? '#bdbdbd' : '#bdbdbd'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Menu = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledMenu open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledMenu>
      <LeftNav open={open}/>
    </>
  )
}

export default Menu