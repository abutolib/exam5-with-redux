import React, { useEffect } from 'react'
import { SevimliItem } from '../../components/SevimliItem/SevimliItem'
import Rastraposha from '../../assets/images/rastraposha.png'
import DeleteBtn from '../../assets/images/delte-btn.svg'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../Api/api'
import { setSevimli } from '../../redux/sevimli/sevimliAction'
import { SavatchaNotFound } from '../../components/SavatchaNotFound/SavatchaNotFound'
import { PlusBtn } from '../../assets/icons/icons'
import { handleAddSevimli, handleDeleteSevimli, sortedIsLiked } from '../../redux-toolkit/sevimliSlice'
import { handleAddKorzinka } from '../../redux-toolkit/korzinkaSlice'


export const Sevimli = () => {


  const dispatch = useDispatch()

  const { sevimli } = useSelector(state => state.sevimli)

  const filteredArray = sevimli.filter(item => item.isLiked === true)

  const myFunction = (id) => {
    dispatch(sortedIsLiked({id:id}))
    dispatch(handleDeleteSevimli(id))
  }


  return (
    <div className='container' style={{ marginBottom: '120px' }}>
      <h2 className='my-5'>Sevimli dorilar</h2>

      {
        sevimli.length > 0
          ? <ul>
            {filteredArray.length ?
              filteredArray.map(item =>

                <li key={item.id} className='d-flex align-items-center justify-content-between savatcha-card mb-3'>
                  <img src={item.img} width={100} height={100} />
                  <div>
                    <p className='medicine-name'>{item.name}</p>
                    <p className='m-0'>{item.type}</p>
                  </div>
                  <div className='d-flex align-items-center '>
                    <button type='button' onClick={() => dispatch(handleAddKorzinka({ id: item.id }))} className='plus-btn'><PlusBtn /></button>
                  </div>
                  <div className=''>
                    <p className='old-price'>{item.oldPrice}</p>
                    <p className='new-price'>{item.price}</p>
                  </div>
                  <button type='button' onClick={() => myFunction(item.id, item.isLiked)} className='plus-btn'><img src={DeleteBtn} /></button>
                </li>



              )
              :<SavatchaNotFound />}
          </ul>
          :
          <SavatchaNotFound />
      }


    </div>

  )
}
