import React from 'react'
import './Service.css'
import { Link } from 'react-router-dom'

export const Service = ({ width,link, img, title, text }) => {


  return (
    <li style={{width:`${width}px`}}>
      <Link className='services-link' to={link}>
        <div className='d-flex align-items-center gap-4'>
          {img}
          <div>
            <h3 className='services-title m-0'>{title}</h3>
            <p className='services-text m-0'>{text}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
