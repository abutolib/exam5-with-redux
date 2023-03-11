import { createContext } from "react";
import { useState } from "react";

export const ProductsContext = createContext();

const productss = [{
  imgSrc : "",
  isLiked :false,
  name:"ROHAT Yog`i №2",
  type:"Mavjud",
  oldPrice :"17,190, uzs",
  price : '16 000 uzs',
},
{
  imgSrc : "",
  isLiked :false,
  name:"ROHAT Yog`i №2",
  type:"Mavjud",
  oldPrice :"17,190, uzs",
  price : '16 000 uzs',
},
{
  imgSrc : "",
  isLiked :false,
  name:"ROHAT Yog`i №2",
  type:"Mavjud",
  oldPrice :"17,190, uzs",
  price : '16 000 uzs',
},
{
  imgSrc : "",
  isLiked :false,
  name:"ROHAT Yog`i №2",
  type:"Mavjud",
  oldPrice :"17,190, uzs",
  price : '16 000 uzs',
},
{
  imgSrc : "",
  isLiked :false,
  name:"ROHAT Yog`i №2",
  type:"Mavjud",
  oldPrice :"17,190, uzs",
  price : '16 000 uzs',
},
{
  imgSrc : "",
  isLiked :false,
  name:"ROHAT Yog`i №2",
  type:"Mavjud",
  oldPrice :"17,190, uzs",
  price : '16 000 uzs',
},
{
  imgSrc : "",
  isLiked :false,
  name:"ROHAT Yog`i №2",
  type:"Mavjud",
  oldPrice :"17,190, uzs",
  price : '16 000 uzs',
},
{
  imgSrc : "",
  isLiked :false,
  name:"ROHAT Yog`i №2",
  type:"Mavjud",
  oldPrice :"17,190, uzs",
  price : '16 000 uzs',
},
{
  imgSrc : "",
  isLiked :false,
  name:"ROHAT Yog`i №2",
  type:"Mavjud",
  oldPrice :"17,190, uzs",
  price : '16 000 uzs',
},

] 


export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(productss)

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  )

}