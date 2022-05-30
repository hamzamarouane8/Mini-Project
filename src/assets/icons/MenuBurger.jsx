import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';

export default (props) => {
    const {className,   menuHover,menuCollapsed ,...rest}=props;
    return (
            <MenuBurgerWrapper {...rest} className={`${className} ${classNames({closed:menuCollapsed && menuHover===true})}`}>
                <div className='bar-one' />
                <div className='bar-two' />
                <div className='bar-three' />
            </MenuBurgerWrapper>
    )
}

const MenuBurgerWrapper = styled.button`

display: flex ;
flex-direction: column ;
justify-content: space-around ;
width: 26px ;
height:26px ;
background-color: transparent ;
border: none ;
  .bar-one ,
  .bar-two ,
  .bar-three {
    width: 24px;
    height:3px;
    background-color: rgb(114, 102, 240);
    border-radius: 10px;
    transition: all .3s linear;
    position : relative;
    transform-origin: 1px ;
  }
  .bar-one {
      transform: rotate(0) ;
  }
  .bar-two{
      opacity: 1;
      transform :translateX(0) ;
  }
  .bar-three {
      transform: rotate(0) ;
  }
  &.closed{
    .bar-one {
      transform: rotate(45deg) ;
  }
  .bar-two{
      opacity: 0;
      transform :translateX(20px) ;
  } 
  .bar-three {
      transform: rotate(-45deg) ;
  }
  }

`