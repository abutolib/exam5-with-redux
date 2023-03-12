import React from 'react'
import { useDispatch} from 'react-redux'
import './Product.css'
import KulrangHeart from '../../assets/images/kulrang-heart.png'
import QizilYurak from '../../assets/images/qizil-yurak.svg'
import { PlusBtn } from '../../assets/icons/icons'
import { Example } from '../ModalBox/ModalBox'
import {  handleAddKorzinka } from '../../redux-toolkit/korzinkaSlice'
import { changeHeartColor, handleAddSevimli } from '../../redux-toolkit/sevimliSlice'


export const Product = ({quantity,isLiked, id, src, name, type, oldPrice, price }) => {

  const dispatch = useDispatch()

  const changeHeart = (id) => {
    dispatch(changeHeartColor({ id: id }))
  }


  const myFunction = (id) => {
    dispatch(handleAddSevimli({ id: id }));
    changeHeart(id)
  }


  return (
    <li className=''>
      <div className='product-card'>
        <div>
          <div className='d-flex gap-1'>
            <img width={175} height={175} src={src} />
            <button type='button' onClick={() => myFunction(id,isLiked)} className='heart-btn'>
              <img width={25} height={22} src={`${isLiked ? QizilYurak : KulrangHeart}`} />
            </button>
          </div>
          <p>{isLiked}</p>
          <p className='product-name'>{name}</p>
          <p className='product-type'>{type}</p>
          <div className='d-flex align-items-center mb-3 justify-content-between'>
            <div>
              <p className='product-old-price'>{oldPrice}</p>
              <p className='product-new-price'>{price}</p>
            </div>
            <div>
              <button onClick={() => dispatch(handleAddKorzinka({ id: id }))} className='plus-btn'><PlusBtn /></button>
            </div>
          </div>
          <Example  quantity={quantity} id={id} src={src} name={name} price={price} type={type} oldPrice={oldPrice} />
        </div>
      </div>
    </li>

  )
}
