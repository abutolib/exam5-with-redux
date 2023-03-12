import React, { useRef } from 'react'
import '../Login/Login.css'
import kozbtn from '../../assets/images/kozbtn.svg'
import { ExitBtn } from '../../assets/icons/icons'
import {  useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export const Register = () => {

  const emailRef = useRef()
  const userRef = useRef()
  const passwordRef = useRef()

  const navigate = useNavigate()

  const handleSubmit =(evt) => {
    evt.preventDefault()
    const values = {
      user_name:userRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value
    }

    localStorage.setItem('token',JSON.stringify(values))

    navigate('/')
    location.reload()


  }

  const handleOpen = () => {
    if (passwordRef.current.type == 'password') {
      passwordRef.current.type = 'text'
    } else {
      passwordRef.current.type = 'password'
    }

  }

  return (
    <div className='container-login'>
      <button className='exit-btn'>
        <ExitBtn />
      </button>
      <ul className='following-list'>
        <li className='following-item2'>
          <Link to='/login' style={{textDecoration:'none',color: "#53B175"}}>Ro'yhatdan o'tish</Link>
        </li>
      </ul>
      <form className='login-form'>
        <label className='login-label'>
          <input ref={userRef} className='tel-input' type='text' placeholder='Foydalanuvchi nomi' />
        </label>
        <label className='login-label'>
          Elektron pochta (optinal)
          <input  style={{ display: 'block' }} ref={emailRef} className='tel-input' type='email' />
        </label>
        <label className='login-label'>
          Parol
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <input ref={passwordRef} className='tel-input' type='password' />
            <button className='koz-btn' type='button' onClick={() => handleOpen()}><img style={{ display: 'block' }} src={kozbtn} alt="koz btn" /></button>
          </div>
        </label>
        <button onClick={handleSubmit} className='enter-btn' type='submit'>Tizimga kirish</button>
      </form>
    </div>
  )
}
