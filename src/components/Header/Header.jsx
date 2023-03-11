import React, { useRef } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Savat } from '../../assets/icons/icons'
import Heart from '../../assets/images/heart.svg'
import redHeart from '../../assets/images/red-heart.svg'
import { NavbarTop } from '../NavbarTop/NavbarTop'

import './Header.css'

export const Header = ({ backImg }) => {

  const navRef = useRef()

  const changeStyle = () => {
    if (navRef.current.className == 'show') {
      navRef.current.className = ''
    } else {
      navRef.current.className = 'show'
    }
  }



  return (
    <>
      <NavbarTop />
      <header className='site-header'>
        <div className='container'>
          <div className='site-header__inner'>
            <Link className='site-logo' to='boshsahifa'>LOGO</Link>
            <ul className='d-flex align-items-center list-unstyled'
              style={{ listStyleType: 'none', gap: '26px', margin: "0", marginLeft: "111px" }}  >
              <li>
                <NavLink onClick={() => changeStyle()} ref={navRef} to='/' className={({ isActive }) =>
                  isActive ? "active-link" : "noactive-link"
                }>
                  Bosh sahifa
                </NavLink>
              </li>
              <li>
                <NavLink to='/mahsulotlar' className={({ isActive }) =>
                  isActive ? "active-link" : "noactive-link"
                }>
                  Mahsulotlar
                </NavLink>
              </li>
            </ul>


            <ul className='d-flex align-items-center list-unstyled gap-3' style={{ margin: "0", marginLeft: '664px' }}>
              <li className='ombor-item'>
                <NavLink to='/liked' className={({ isActive }) =>
                  isActive ? "active-liked" : "noactive-liked"
                }>
                  <img className='d-block mx-1' style={{ marginTop: '5px' }} width={19} height={19} src={redHeart} />
                </NavLink>
              </li>
              <li className='ombor-item'>
                <NavLink to='/savat' className={({ isActive }) =>
                  isActive ? "active-liked " : "noactive-liked"
                }>
                  <div className='d-block mx-1' style={{ marginTop: '2px' }} >
                    <Savat />
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* <Outlet /> */}
    </>
  )
}
