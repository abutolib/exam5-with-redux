import React, { useRef } from 'react'
import './Login.css'
import uzbflag from '../../assets/images/uzbflag.svg'
import kozbtn from '../../assets/images/kozbtn.svg'
import { ExitBtn } from '../../assets/icons/icons'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {

  const telRef = useRef()
  const passwordRef = useRef()

  const navigate = useNavigate()

  const handleSubmit =(evt) => {
    evt.preventDefault()
    const values = {
      user_tel:telRef.current.value,
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
        <li className='following-item'>
          <Link to='/register' style={{textDecoration:'none',color: "#53B175"}} >Kirish</Link>
        </li>
      </ul>
      <form onSubmit={handleSubmit} className='login-form'>
        <label className='login-label'>
          Telefon raqam
          <div style={{ marginTop: '10px' }}>
            <img src={uzbflag} />
            <div className='d-flex align-items-center'>
              <p className='nomer m-0'>+998</p>
              <input ref={telRef} className='tel-input' type='tel' />
            </div>
          </div>
        </label>
        <label className='login-label'>
          Parol
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <input ref={passwordRef} className='tel-input' type='password' />
            <button className='koz-btn' type='button' onClick={() => handleOpen()}><img style={{ display: 'block' }} src={kozbtn} alt="koz btn" /></button>
          </div>
        </label>
        <button className='enter-btn' type='submit'>Tizimga kirish</button>
      </form>
    </div>
  )
}
