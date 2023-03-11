import React from 'react'
import { Link } from 'react-router-dom'
import { Locataion, Person } from '../../assets/icons/icons'
import './NavbarTop.css'
export const NavbarTop = () => {
  return (
    <div className="container">
      <nav className='navbar-top' style={{ padding: '10px 0' }}>
      <ul className='navbar-top__list navbar-top-list'>
        <li  >
          <Link className='navbar-top-list__item' to='/catalog' style={{ color: "#505050" }}>Mahsulotlar katalogi</Link>
        </li>
        <li >
          <Link className='navbar-top-list__item' to='/photos' style={{ color: "#505050" }}>Foto-lavhalar</Link>
        </li>
        <li>
          <Link className='navbar-top-list__item' to='/payment' style={{ color: "#505050" }}>Yetkazib berish va to'lash</Link>
        </li>
        <li >
          <Link className='navbar-top-list__item' style={{ color: "#AB7A19" }} to='/action'>Aksiya</Link>
        </li>
        <li >
          <Link className='navbar-top-list__item' to='/news' style={{ color: "#53B175" }} >Yangi</Link>
        </li>
      </ul>

      <ul className='options-list'>
        <li className='options-item' style={{ borderRight: '1px solid rgba(176, 183, 195, 0.4)' }}>
          <select>
            <option>UZB</option>
            <option>RUS</option>
            <option>ENG</option>
          </select>
        </li>
        <li className='options-item' style={{ borderRight: '1px solid rgba(176, 183, 195, 0.4)' }}>
          <p style={{ margin: '0' }}>Toshkent shahar <Locataion /></p>
        </li>
        <li className='options-item'>
          <p style={{ margin: '0' }}>Kirish <Person /></p>
        </li>
      </ul>
    </nav>
    </div>
  )
}
