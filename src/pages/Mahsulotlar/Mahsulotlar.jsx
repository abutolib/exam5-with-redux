import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../../components/Product/Product'
import { all, asal, choy, lolipoplar, non, search, sharbatlar, tabletkalar, yog, ziravorlar } from '../../redux-toolkit/sevimliSlice'

import './mahsulotlar.css'

export const Mahsulotlar = () => {


  const name = useRef()

  const { products } = useSelector(state => state.sevimli)
  const { sevimli } = useSelector(state => state.sevimli)

  const dispatch = useDispatch()

  return (
    <>
      <div className="container ">
        <div className='d-flex align-items-center justify-content-between'>
          <h2 className='my-4'>Mahsulotlar</h2>
          <label className='search-label'>
            <input ref={name} className='search-input' type="text" placeholder='Qidirish' onInput={(e)=>dispatch(search(e.target.value))} />
          </label>
        </div>
        <div className='d-flex align-items-start gap-4'>
          <div className='category-wrapper'>
            <div className='d-flex justify-content-between'>
              <h4 className='category'>Kategoriyalar</h4>
              <p>Tozalash</p>
            </div>
            <form>
              <label className='d-flex gap-2'>
                <input type='radio' name='category' id='1'   onClick={() => dispatch(all())}   />
                Hammasi
              </label>
              <label className='d-flex gap-2'>
                <input type='radio' name='category' id='2' onClick={() => dispatch(choy())}/>
                Choy
              </label>
              <label className='d-flex gap-2'>
                <input type='radio' name='category' id='3' onClick={() => dispatch(asal())} />
                Asal
              </label>
              <label className='d-flex gap-2'>
                <input type='radio' name='category' id='4' onClick={() => dispatch(yog())} />
                Yog’
              </label>
              <label className='d-flex gap-2'>
                <input type='radio' name='category' id='5' onClick={() => dispatch(non())}/>
                Non
              </label>
              <label className='d-flex gap-2'>
                <input type='radio' name='category' id='6' onClick={() => dispatch(ziravorlar())} />
                Ziravorlar
              </label>
              <label className='d-flex gap-2'>
                <input type='radio' name='category' id='7' onClick={() => dispatch(sharbatlar())} />
                Sharbatlar
              </label>
              <label className='d-flex gap-2'>
                <input type='radio' name='category' id='8' onClick={() => dispatch(lolipoplar())}/>
                Lolipoplar
              </label>
              <label className='d-flex gap-2'>
                <input type='radio' name='category' id='9' onClick={() => dispatch(tabletkalar())} />
                Tabletkalar
              </label>
            </form>
          </div>
          {
            products.length
              ? <ul className='d-flex flex-wrap gap-4 list-unstyled ' style={{ width: '892px' }}>
                {products.map(item =>
                  <Product  quantity = {item.quantity} isLiked={item.isLiked} key={item.id} id={item.id} src={item.img} name={item.name} type={item.type} oldPrice={item.oldPrice} price={item.price} />
                )}
              </ul>
              : ""
          }
        </div>
      </div>
    </>
  )
}
