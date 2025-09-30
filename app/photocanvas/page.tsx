'use client';


import React, { Suspense, useState } from 'react'
import { Header } from '../components'
import Photopage from '../components/Photopage'
import Footer from '../components/Footer'

const page = () => {
  const [searchValue, setSearchValue] = useState("");
    const [selectedServiceFromHeader, setSelectedServiceFromHeader] = useState<string | null>(null);
  
  return (
    <div>
      <Suspense fallback={<></>}>
    <Header searchValue={searchValue} setSearchValue={setSearchValue} setSelectedServiceFromHeader={setSelectedServiceFromHeader}/>
      </Suspense>
      <Photopage/>
      <Footer/>
    </div>
  )
}

export default page



