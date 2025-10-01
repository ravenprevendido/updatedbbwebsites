'use client';

import React, { Suspense, useState } from 'react'
import { Header } from '../components'
import Footer from '../components/Footer'
import Labelpage from '../components/LabelSticker'


const page = () => {
    const [searchValue, setSearchValue] = useState("");
    const [selectedServiceFromHeader, setSelectedServiceFromHeader] = useState<string | null>(null);
      
  return (
    <div><Labelpage/> </div>
  )
}

export default page
