'use client';

import React, { useState } from 'react'
import { Header } from '../components'
import Footer from '../components/Footer'
import Labelpage from '../components/LabelSticker'

const page = () => {
   
  return (
    <>
  
    <Header searchValue={''} setSearchValue={function (value: React.SetStateAction<string>): void {
              throw new Error('Function not implemented.')
          } } />
        <Labelpage/>
          <Footer/>
    </>
  )
}

export default page
