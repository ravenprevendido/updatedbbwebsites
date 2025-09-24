'use client';


import React, { useState } from 'react'
import { Header } from '../components'
import Photopage from '../components/Photopage'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
    <Header searchValue={''} setSearchValue={function (value: React.SetStateAction<string>): void {
        throw new Error('Function not implemented.')
      } } />
      <Photopage/>
      <Footer/>
    </>
  )
}

export default page



