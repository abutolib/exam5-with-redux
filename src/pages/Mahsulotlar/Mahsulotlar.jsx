import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Product } from '../../components/Product/Product'

import './mahsulotlar.css'

export const Mahsulotlar = () => {

  const { products } = useSelector(state => state.sevimli)
  const { sevimli } = useSelector(state => state.sevimli)

  console.log(products);
  console.log(sevimli);

  

  const dispatch = useDispatch()


  return (
    <>
      <div className="container ">
        <div className='d-flex align-items-center justify-content-between'>
          <h2 className='my-4'>Mahsulotlar</h2>
          <label className='search-label'>
            <input className='search-input' type="text" placeholder='Qidirish' />
          </label>
        </div>
        <div className='d-flex align-items-start gap-4'>
          <div className='category-wrapper'>
            <div className='d-flex justify-content-between'>
              <h4 className='category'>Kategoriyalar</h4>
              <p>Tozalash</p>
            </div>
            <form>
              <div className='d-flex gap-2'>
                <input type='checkbox' />
                Hammasi
              </div>
              <div className='d-flex gap-2'>
                <input type='checkbox' />
                Choy
              </div>
              <div className='d-flex gap-2'>
                <input type='checkbox' />
                Asal
              </div>
              <div className='d-flex gap-2'>
                <input type='checkbox' />
                Yog’
              </div>
              <div className='d-flex gap-2'>
                <input type='checkbox' />
                Non
              </div>
              <div className='d-flex gap-2'>
                <input type='checkbox' />
                Ziravorlar
              </div>
              <div className='d-flex gap-2'>
                <input type='checkbox' />
                Sharbatlar
              </div>
              <div className='d-flex gap-2'>
                <input type='checkbox' />
                Lolipoplar
              </div>
              <div className='d-flex gap-2'>
                <input type='checkbox' />
                Tabletkalar
              </div>
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
