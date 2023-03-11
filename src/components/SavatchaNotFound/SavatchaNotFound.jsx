import React from 'react'
import Empty from '../../assets/images/empty.svg'
import './Styless.css'

export const SavatchaNotFound = () => {
  return (
    <div className='savatcha-not'>
      <img className='d-block mx-auto' src={Empty} alt="" />
    </div>
  )
}
