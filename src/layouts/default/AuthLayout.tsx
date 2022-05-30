import classNames from 'classnames';
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/layout/header/Header';
import Sidebar from '../../components/layout/sidebar/Sidebar';

interface LayoutProps {
    children:any;
}

export default (props:LayoutProps) => {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    return (
        <LayoutWrapper className={classNames(
            `wrapper vertical-layout`,
            {
                // Modern Menu
                'menu-collapsed': menuCollapsed && windowWidth >= 1000,
                'menu-expanded': !menuCollapsed && windowWidth > 1000,
            }
        )}>
            <Sidebar {...{ menuCollapsed, setMenuCollapsed }} />
            <main>
                <Header />
                {props.children}

            </main>
        </LayoutWrapper>
    )
}

const LayoutWrapper = styled.div`
height:100% ;
display: flex ;
flex-direction:row ;
background-color:#F7F7F7 ;
&.menu-collapsed{
    .main-menu{
        width:80px;
        &.expanded{
            width:300px;
            z-index: 1000;
            .navbar-header .brand-text{
                display: inline;
            }
        }
        .navbar-header 
        .brand-text{
            display: none;
            
        }
        .menu-icon{
            
        }
}
}
&.menu-expanded{
    .main-menu{
        width:300px;
    }
}
main {
    margin-left: 290px;
    width: 100% ;
}
`