import React, { useState } from 'react'
import './SavatchaItem.css'
import Rastraposha from '../../assets/images/rastraposha.png'
import { Minus, Plus } from '../../assets/icons/icons'
import DeleteBtn from '../../assets/images/delte-btn.svg'
import { api } from '../../Api/api'

export const SavatchaItem = ({id,rasm,name,type,oldPrice,newPrice,}) => {

  const [count,setCount] = useState(1)

  const handleIncrement = () => {
    if(count > 1){
      setCount(count - 1)
    }
  }
  const handleDecrement = () => {
    setCount(count + 1)
  }




  return (
    <></>
    // <li className='d-flex align-items-center justify-content-between savatcha-card mb-3'>
    //   <img src={Rastraposha}/>
    //   <div>
    //     <p className='medicine-name'>{name}</p>
    //     <p className='m-0'>{type}</p>
    //   </div>
    //   <div className='d-flex align-items-center '>
    //     <button onClick={handleIncrement} className='plus-btn'><Minus/></button>
    //     <p className='dori-soni'>{count}</p>
    //     <button onClick={handleDecrement} className='plus-btn'><Plus/></button>
    //   </div>
    //   <div className=''>
    //     <p className='old-price'>{oldPrice}</p>
    //     <p className='new-price'>{newPrice}</p>
    //   </div>
    //   <button onClick={() => handleDelete(id)} className='plus-btn'><img src={DeleteBtn}/></button>
    // </li>
  )
}
