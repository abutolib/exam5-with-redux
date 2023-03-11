import React, { useContext } from 'react'
import './Home.css'
import Doctor from '../../assets/images/doctor1.jpg'
import { Tolov, Track, Chegirma, Naushnik } from '../../assets/icons/icons'
import uzbFlag from '../../assets/images/uzbflag.svg'

import { Link } from 'react-router-dom'
import { Service } from '../../components/Service/Service'
import { Product } from '../../components/Product/Product'
import Accordions from '../../components/Accordion/Accordion'

import Logo1 from '../../assets/images/logo1.svg'
import Logo2 from '../../assets/images/log2.svg'
import Logo3 from '../../assets/images/logo3.svg'
import Logo4 from '../../assets/images/logo4.svg'
import Logo5 from '../../assets/images/logo5.svg'
import { ProductsContext } from '../../context/Products/Products'
import { useDispatch, useSelector } from 'react-redux'
export const Home = () => {

  let k = 0;
  const {products} = useSelector(state => state.sevimli)

  const dispatch = useDispatch()

  return (
    <main>
      <section className='site-hero'>
        <div className="container">
          <div className="site-hero__inner">
            <h1 className='site-hero__title'>Bepul shifokor maslahat kerakmi?</h1>
            <p className='site-hero__text'>24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq <br />
              Faqat <a className='link-to-app' style={{ color: "#53B175" }} href='https://play.google.com/store/games'>mobil ilovada</a>
            </p>
            <div className='doctor-img-wrapper'>
              <img className='doctor-img' width={836} height={500} src={Doctor} />
              <div className='consultant'>
                <h3 className='consultant-title'>Consultant</h3>
                <p className='consultant-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut ullamcorper in et amet.
                </p>
              </div>
              <div className='xizmat'>
                <h3 className='consultant-title hourss'>24/7 xizmatlar</h3>
                <p className='consultant-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Ut ullamcorper in et amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='services'>
        <div className="container">
          <div className="services__inner">
            <ul className='d-flex justify-content-between list-unstyled m-0'>
              <Service
                width="286"
                link={'/delivery'}
                img={<Track />}
                title="Yetkazib berish bepul"
                text="100 000 so'mdan ortiq buyurtma berganingizda"
              />
              <Service
                width="217"
                link={'/tolov'}
                img={<Tolov />}
                title="Tez to'lov"
                text="100% xavfsiz to'lov"
              />
              <Service
                width="300"
                link={'/chegirma'}
                img={<Chegirma />}
                title="Doimiy chegirmalar"
                text="Ular allaqachon ishlamoqda"
              />
              <Service
                width="250"
                link={'/help'}
                img={<Naushnik />}
                title="Onlayn yordam"
                text="Ish vaqti: 08:00 - 18:00"
              />
            </ul>
          </div>
        </div>
      </section>
      <section className='our-products'>
        <div className="container">
          <h2 className='our-products__title'>Mahsulotlarimiz <br /> ro'yxati</h2>

          {
            products.length ? <ul className='d-flex gap  list-unstyled m-0  wrapp'> {products.map(item => 
            <Product isLiked={item.isLiked}  key={item.id} id={item.id} src={item.img} name={item.name} type={item.type} oldPrice={item.oldPrice} price ={item.price}/>)} </ul> : ""
          }

          <Link style={{color: "#181725"}} className='to-mahsulotlar-btn' to='mahsulotlar' >Barcha mahsulotlarni ko’rish →</Link>

        </div>
      </section>
      <article className='site-article'>
        <div className="container">
          <div className="site-article__inner">
            <h3 className='site-article__title'> Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz</h3>
          </div>

        </div>
      </article>
      <section className='questions'>
        <div className="container">
          <div className="questions__inner">
            <div>
              <h3 className='questions_title'>Ko’p so'raladigan savollar</h3>
              <p className='questions__text'>Qo'shimcha ma'lumot uchun <br /> biz bilan bog'laning</p>
              <Link to='/questions' className='questions__link' style={{ color: "#181725" }}>Batafsil</Link>
            </div>
            <div style={{ width: '805px', marginTop: '100px' }}>
              <Accordions />
            </div>
          </div>
        </div>
      </section>
      <section className='site-form'>
        <div className="container">
          <div className="site-form__inner">
            <span style={{ color: "#53B175" }}>Biz bilan bog'lanish</span>
            <h2 className='site-form__title'>So'rovingizni yuboring</h2>
            <form className='site-forms'>
              <input className='form-name-input' type="text" placeholder='Ismingizni kiriting...' />
              <input className='form-name-input' type="email" placeholder='Emailingizni kiriting...' />
              <label className='form-tel-label' >
                Telefon raqam
                <div>
                  <img src={uzbFlag} />
                  <p className='d-inline-block nomer'>+998</p>
                  <input className='form-tel-input' type='number' defaultValue='+998' />
                </div>
              </label>
              <input type="text" className='form-name-input' />
              <button type='submit' className='form-btn'>Xabar yuborish</button>
            </form>
          </div>
        </div>
      </section>

      <section className='site-partners'>
        <div className="container">
          <div className="partners__inner">
            <ul className='partners__list'>
              <li className='partners__item'>
                <img src={Logo1} />
              </li>
              <li className='partners__item'>
                <img src={Logo2} />
              </li>
              <li className='partners__item'>
                <img src={Logo3} />
              </li>
              <li className='partners__item'>
                <img src={Logo4} />
              </li>
              <li className='partners__item'>
                <img src={Logo5} />
              </li>
            </ul>
          </div>
        </div>
      </section>

    </main>

  )
}
