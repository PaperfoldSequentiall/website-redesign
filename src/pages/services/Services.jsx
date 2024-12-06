import React from 'react'
import './services.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import GetInTouch from '../../components/getInTouch/GetInTouch';



const Services = () => {
  return (
    <div className='services'>
      <Header/>
      Services
      <GetInTouch />
      <Footer/>
      </div>
  )
}

export default Services