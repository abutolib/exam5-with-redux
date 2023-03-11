import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteBtn from '../../assets/images/delte-btn.svg'
import './Savat.css'
import { useDispatch, useSelector } from 'react-redux'
import { SavatchaNotFound } from '../../components/SavatchaNotFound/SavatchaNotFound'
import '../../components/SavatchaItem/SavatchaItem.css'
import { Minus, Plus } from '../../assets/icons/icons'
import { handleDecrement, handleDeleteKorzinka, handleIncrement } from '../../redux-toolkit/korzinkaSlice'

export const Savat = () => {

  const pul = 0
  const dispatch = useDispatch()

  const {korzinka} = useSelector((state => state.korzinka))
  const korzinkaArray = korzinka.map(item=> item.price * item.quantity )

  const jamii = korzinkaArray.reduce(((acc,val) => acc + val),0)

  return (
    <div className='container'>
      <div className='d-flex align-items-center justify-content-between my-5 '>
        {
          korzinka.length?<h2>Savatchada {korzinka.length} ta mahsulot bor</h2> :<h2>Savatcha</h2>
        }
        <Link style={{ color: "#181725" }} className='buyurtma-history-btn' to='/history'>Buyurtmalar tarixi</Link>
      </div>
      {
        korzinka.length ?
          <>
            <div className='d-flex align-items-start justify-content-between'>
              <div className='savatcha-item'>

                {
                  korzinka.length ? <ul >{korzinka.map(item =>
                    
                    <li key={item.id} className='d-flex align-items-center justify-content-between savatcha-card mb-3'>
                      <img src={item.img} width={90} height={90} />
                      <div>

                        <p className='medicine-name'>{item.name}</p>
                        <p className='m-0'>{item.type}</p>
                      </div>
                      <div className='d-flex align-items-center '>
                        <button onClick={() => dispatch(handleDecrement(item.id))} className='plus-btn'><Minus /></button>
                        <p className='dori-soni'>{item.quantity}</p>
                        <button onClick={() => dispatch(handleIncrement(item.id))} className='plus-btn'><Plus /></button>
                      </div>
                      <div className=''>
                        <p className='old-price'>{item.oldPrice}</p>
                        <p className='new-price'>{item.price} uzs</p>
                      </div>
                      <button onClick={() => dispatch(handleDeleteKorzinka(item.id))} type='button' className='plus-btn'><img src={DeleteBtn} /></button>
                    </li>)}
                  </ul> : ""
                }

              </div>
              

                <div className='common-balance' style={{ marginBottom: "441px" }}>
                <ul className='m-0 list-unstyled mb-4' >
                  <li className='d-flex justify-content-between'>
                    <p>Mahsulotlar({korzinka.length})</p>
                    <p>{jamii}</p>
                  </li>
                  <li className='d-flex justify-content-between'>
                    <p>Chegirma</p>
                    <p>0</p>
                  </li>
                  <li className='d-flex justify-content-between'>
                    <p>Yetkazib berish</p>
                    <p>15 000</p>
                  </li>
                  <li className='d-flex justify-content-between'>
                    <b>Umumiy</b>
                    <b>{jamii + 15000} so'm</b>
                  </li>
                </ul>
                <Link to='/tolov' className='common-btn' style={{ color: "#FFF", marginBottom: "16px" }}>To’lovga o’tish</Link>
                <Link to='/mahsulotlar' className='common-btn common-btn2' style={{ color: "#181725" }}>Menyuga qaytish</Link>
              </div>
              
            </div></> : <SavatchaNotFound />
      }
    </div >
  )
}
