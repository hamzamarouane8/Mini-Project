import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuBurger from '../../../assets/icons/MenuBurger';
import { privateRoutes } from '../../../routes/AllRoutes';
import { WrapperSidebar } from './sidebar.style';
import  Collapse from '@material-ui/core/Collapse';
//----------------------------------------------------------

export default (props) => {
  const { menuCollapsed, setMenuCollapsed } = props;
  const assets = {
    logo_1: require('../../../assets/img/logo.svg').default
  }
  const [menuHover, setMenuHover] = useState(false);
  const [toggleOpen , setToggleOpen] = useState(false);
  //const [menuCollapsed, setMenuCollapsed] = useState(false);
  //const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const onCollapseClick = (e, item) => {
   // toggleOpenGroup(item, parentItem)
   setToggleOpen(true);
    e.preventDefault()
  }

  return (
    <WrapperSidebar className={classNames('main-menu bloc', {
      expanded: menuHover || menuCollapsed === false,
    })} onMouseEnter={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)}>

      <div className='navbar-header'>
        <ul>
          <li className='auto-me'>
            <a className='navbar-brand' href='#'>
              <span className='brand-logo'>
              <h2>MI</h2>
              </span>
              <h2 className='brand-text'>/Data</h2>
            </a>
          </li>
          <li>
            <MenuBurger className='menu-icon' onClick={() => setMenuCollapsed(prev => !prev)}  {...{ menuHover, menuCollapsed }} />
          </li>

        </ul>
      </div>
      <div className='main-menu-content'>
        <ul className='navigation-main'>
          {
            privateRoutes.filter((route) => !!route.text).map((route, idx) => (
              <li key={idx}>
                <a href='#' onClick={(e=>onCollapseClick(e,route))}>
                  <Link to={route.path}>
                    {route?.icon} <span>{route?.text}</span></Link>
                </a>
              </li>
            ))
          }

        </ul>
      </div>

    </WrapperSidebar>
  )
}


