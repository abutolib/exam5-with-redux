import { createSlice } from "@reduxjs/toolkit";
import RohatYog from "../assets/images/rohat-yog'.png"
import RohatSirop from "../assets/images/rohat-sirop.png"
import Rastraposha from "../assets/images/rastraposha.png"
import RohatMen from "../assets/images/rohat-men.png"



const korzinkaSlice = createSlice({


  name: 'korzinka',
  initialState:
  {
    korzinka: [],
    questions:[],
    products: [
      {
        id: 1,
        isLiked: false,
        img: RohatYog,
        name: 'ROHAT Yog`i №2',
        type: 'Mavjud',
        oldPrice: '17,190, uzs',
        price: 16000,
        quantity: 1

      },
      {
        id: 2,
        isLiked: false,
        img: RohatSirop,
        name: 'Rohat Sirop',
        type: 'Erkaklar kuchi',
        oldPrice: '200,190, uzs',
        price: 150000,
        quantity: 1

      },
      {
        id: 3,
        isLiked: false,
        img: Rastraposha,
        name: 'Organic Bananas',
        type: '7pcs, Price',
        oldPrice: '17,190, uzs',
        price: 16000,
        quantity: 1

      },
      {
        id: 4,
        isLiked: false,
        img: RohatMen,
        name: 'ROHAT Yog`i №22',
        type: 'Mavjud',
        oldPrice: '17,190, uzs',
        price: 16000,
        quantity: 1

      },
      {
        id: 5,
        isLiked: false,
        img: Rastraposha,
        name: 'Rohat Sirop',
        type: 'Rohat Sirop',
        oldPrice: '200,190, uzs',
        price: 150000,
        quantity: 1

      },
    ],
  }
  ,
  reducers: {
    handleAddKorzinka: (state, action) => {
      const findedItem = state.products.find(item => item.id === action.payload.id)

      const foundProdIndex = state.korzinka.findIndex(item => {
        return item.id === action.payload.id
      })
      if (foundProdIndex == -1) {
        state.korzinka = [...state.korzinka, findedItem]
      }
    },
    handleDeleteKorzinka: (state, action) => {
      state.korzinka = state.korzinka.filter(item => item.id !== action.payload)

    },
    handleIncrement: (state, action) => {
      const findedItem = state.korzinka.find(item => item.id === action.payload)
      findedItem.quantity += 1
      const findedItem2 = state.products.find(item => item.id === action.payload)
      findedItem2.quantity += 1
    },
    handleDecrement: (state, action) => {
      const findedItem = state.korzinka.find(item => item.id === action.payload)
      if (findedItem.quantity > 1) {
        findedItem.quantity -= 1
      }
      const findedItem2 = state.products.find(item => item.id === action.payload)
      if (findedItem2.quantity > 1) {
        findedItem2.quantity -= 1
      }
    },
    handleAddQuestions :(state,action) => {
      state.questions = [...state.questions,action.payload]
    }


  }
});


export const { handleAddKorzinka, handleDeleteKorzinka, handleIncrement, handleDecrement,handleAddQuestions } = korzinkaSlice.actions;
export default korzinkaSlice.reducer;