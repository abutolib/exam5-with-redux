import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Home } from '../Home/Home'
import { Mahsulotlar } from '../Mahsulotlar/Mahsulotlar'
import { NotFound } from '../NotFound/NotFound'
import { Savat } from '../Savat/Savat'
import { Sevimli } from '../Sevimli/Sevimli'

function UnAuthenticaton() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='mahsulotlar' element={<Mahsulotlar />} />
        <Route path='liked' element={<Sevimli />} />
        <Route path='savat' element={<Savat />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default UnAuthenticaton
