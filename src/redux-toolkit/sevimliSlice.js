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
    ]
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
    handleIncrement2: (state, action) => {
      const findedItem = state.korzinka.find(item => item.id === action.payload)
      findedItem.quantity += 1
    },
    handleDecrement2: (state, action) => {
      const findedItem = state.korzinka.find(item => item.id === action.payload)
      if (findedItem.quantity > 1) {
        findedItem.quantity -= 1
      }
    },
    sortedIsLiked: (state, action) => {
      state.products[action.payload.id - 1].isLiked = !state.products[action.payload.id - 1].isLiked
    },
    choy: (state, action) => {
      const choy = [
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
      ]
      state.products = [...choy]
    },
    all: (state, action) => {
      const all = [
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
      ]
      state.products = [...all]
    },
    asal: (state, action) => {
      const all = [
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
      ]
      state.products = [...all]
    },
    yog: (state, action) => {
      const all = [
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
          id: 5,
          isLiked: false,
          img: Rastraposha,
          name: 'Rohat Sirop',
          type: 'Rohat Sirop',
          oldPrice: '200,190, uzs',
          price: 150000,
          quantity: 1

        },
      ]
      state.products = [...all]
    },
    non: (state, action) => {
      const all = [
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
      ]
      state.products = [...all]
    },
    ziravorlar: (state, action) => {
      const all = [

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
          id: 5,
          isLiked: false,
          img: Rastraposha,
          name: 'Rohat Sirop',
          type: 'Rohat Sirop',
          oldPrice: '200,190, uzs',
          price: 150000,
          quantity: 1

        },
      ]
      state.products = [...all]
    },
    sharbatlar: (state, action) => {
      const all = [
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
      ]
      state.products = [...all]
    },
    lolipoplar: (state, action) => {
      const all = [
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
      ]
      state.products = [...all]
    },
    tabletkalar: (state, action) => {
      const all = [

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
          id: 5,
          isLiked: false,
          img: Rastraposha,
          name: 'Rohat Sirop',
          type: 'Rohat Sirop',
          oldPrice: '200,190, uzs',
          price: 150000,
          quantity: 1

        },
      ]
      state.products = [...all]
    },

    search: (state, action) => {
      const searchedProduct = state.products.filter((item => {
        return item.name.toLowerCase().includes(action.payload)
      }))
      state.products = [...searchedProduct]
    }


  }
});


export const { handleAddSevimli, handleDeleteSevimli, changeHeartColor, handleIncrement2, handleDecrement2, sortedIsLiked, choy, all, yog, asal, non, ziravorlar, sharbatlar, lolipoplar, tabletkalar ,search} = sevimliSlise.actions;
export default sevimliSlise.reducer;