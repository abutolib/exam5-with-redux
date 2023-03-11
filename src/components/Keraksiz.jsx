import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
export const Keraksiz = () => {

  const {products} =  useSelector(((state) => state.cardss))
  // const dispatch = useDispatch()

  // const handleIncrement = ()=>{
  //   dispatch(cardAdd())
  // }
  // const handleDecrement = ()=>{
  //   dispatch(cardAdd())
  // }
  console.log(products);

  return (
    <>
      <button>-</button>
        {/* <h1>{count}</h1> */}
      <button onClick={() => handleIncrement()}>+</button>
      </>
  )
}
