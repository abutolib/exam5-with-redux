import React from 'react'
import PageNotFound from '../../assets/images/404.svg'
export const NotFound = () => {
  return (
    <div>
      <img width={700} height={700} className='d-block mx-auto' src={PageNotFound}/>
    </div>
  )
}
