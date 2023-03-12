import { createSlice } from "@reduxjs/toolkit";
import RohatYog from "../assets/images/rohat-yog'.png"
import RohatSirop from "../assets/images/rohat-sirop.png"
import Rastraposha from "../assets/images/rastraposha.png"
import RohatMen from "../assets/images/rohat-men.png"


const sevimliSlise = createSlice({
  name: 'sevimli',
  initialState:
  {
    sevimli: [],
    products: [
      {
        id: 1,
        isLiked: false,
        img: RohatYog,
        name: 'ROHAT Yog`i №2',
        type: 'Mavjud',
        oldPrice: '17,190, uzs',
        price: 16000,
        quantity: 1,
        choy:true,
        asal:true,
        yog:true,
        non:false,
        ziravorlar:false,
        sharbatlar:true,
        lolipoplar:false,
        tabletkalar:false,
      },
      {
        id: 2,
        isLiked: false,
        img: RohatSirop,
        name: 'Rohat Sirop',
        type: 'Erkaklar kuchi',
        oldPrice: '200,190, uzs',
        price: 150000,
        quantity: 1,
        choy:true,
        asal:false,
        yog:false,
        non:false,
        ziravorlar:true,
        sharbatlar:true,
        lolipoplar:false,
        tabletkalar:true,
      },
      {
        id: 3,
        isLiked: false,
        img: Rastraposha,
        name: 'Organic Bananas',
        type: '7pcs, Price',
        oldPrice: '17,190, uzs',
        price: 16000,
        quantity: 1,
        choy:true,
        asal:false,
        yog:false,
        non:false,
        ziravorlar:true,
        sharbatlar:false,
        lolipoplar:true,
        tabletkalar:true,
      },
      {
        id: 4,
        isLiked: false,
        img: RohatMen,
        name: 'ROHAT Yog`i №22',
        type: 'Mavjud',
        oldPrice: '17,190, uzs',
        price: 16000,
        quantity: 1,
        choy:false,
        asal:true,
        yog:false,
        non:false,
        ziravorlar:false,
        sharbatlar:false,
        lolipoplar:false,
        tabletkalar:false,
      },
      {
        id: 5,
        isLiked: false,
        img: Rastraposha,
        name: 'Rohat Sirop2',
        type: 'Rohat Sirop2',
        oldPrice: '200,190, uzs',
        price: 150000,
        quantity: 1,
        choy:false,
        asal:true,
        yog:true,
        non:true,
        ziravorlar:true,
        sharbatlar:false,
        lolipoplar:false,
        tabletkalar:true,

      },
    ],
  }
  ,
  reducers: {
    handleDeleteSevimli: (state, action) => {
      state.sevimli = state.sevimli.filter(item => item.id !== action.payload)
    },

    handleAddSevimli: (state, action) => {
      const findedItem = state.products.find(item => item.id === action.payload.id)
      const foundProdIndex = state.sevimli.findIndex(item => {
        return item.id === action.payload.id
      })
      if (foundProdIndex == -1) {
        state.sevimli = [...state.sevimli, findedItem]
      }
    },
    changeHeartColor: (state, action) => {
      const findedItem = state.products.find(item => item.id === action.payload.id)
      const findedItem2 = state.sevimli.find(item => item.id === action.payload.id)
      findedItem.isLiked = !findedItem.isLiked
      findedItem2.isLiked = !findedItem2.isLiked
    },
    sortedIsLiked: (state, action) => {
      state.products[action.payload.id - 1].isLiked = !state.products[action.payload.id - 1].isLiked
    },
    all: (state, action) => { 
      const all = [...state.products]
      state.products = [...all]
    },
    sorted:(state,action)=>{
      const array = state.products.filter(item => item[action.payload])
      console.log(array);
      state.products = [...array]
    },

    search: (state, action) => {
      const searchedProduct = state.products2.filter((item => {
        return item.name.toLowerCase().includes(action.payload)
      }))
      state.products = [...searchedProduct]
    }


  }
});


export const { handleAddSevimli, handleDeleteSevimli, changeHeartColor, handleIncrement2, handleDecrement2, sortedIsLiked, choy, all, yog, asal, non, ziravorlar, sharbatlar, lolipoplar, tabletkalar ,search,sorted} = sevimliSlise.actions;
export default sevimliSlise.reducer;