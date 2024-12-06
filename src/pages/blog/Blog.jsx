import React from 'react'
import './blog.scss';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import GetInTouch from '../../components/getInTouch/GetInTouch';



const Blog = () => {
  return (
    <div className='blog'>
      <Header/>
      Blog
      <GetInTouch />
      <Footer/>
      </div>
  )
}

export default Blog