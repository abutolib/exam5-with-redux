import React, { useRef } from 'react'
import './Login.css'
import uzbflag from '../../assets/images/uzbflag.svg'
import kozbtn from '../../assets/images/kozbtn.svg'
import { ExitBtn } from '../../assets/icons/icons'

export const Login = () => {

  const passwordRef = useRef()

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
          Kirish
        </li>
      </ul>
      <form className='login-form'>
        <label className='login-label'>
          Telefon raqam
          <div style={{ marginTop: '10px' }}>
            <img src={uzbflag} />
            <div className='d-flex align-items-center'>
              <p className='nomer m-0'>+998</p>
              <input className='tel-input' type='tel' />
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
