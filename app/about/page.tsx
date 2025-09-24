"use client";
import React, { useState } from 'react'
import { Header } from '../components';
import Footer from '../components/Footer';
import AboutPages from '../components/AboutPages';

const page = () => {
  return (
    <>
    <div  style={{backgroundImage: "url('/missionbg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '80vh',
    opacity: 2
    
    }}>
        <Header searchValue={''} setSearchValue={function (value: React.SetStateAction<string>): void {
              throw new Error('Function not implemented.');
          } } />
        <AboutPages/>
          <Footer/>
      </div>
    </>
  )
}
export default page

