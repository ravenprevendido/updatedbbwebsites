"use client";

import React from 'react'
import { Header } from '../components'
import ServicesPages from '../components/ServicesPages';
import Footer from '../components/Footer';
import ServicesInfo from '../components/ServiceInfo';
import { useState } from 'react';

const page = () => {
 const [searchValue, setSearchValue] = useState("");
 
  return (
    <>
    <Header searchValue={searchValue} setSearchValue={setSearchValue} />
         <ServicesInfo searchValue={searchValue} />
          <Footer />
    </>
  )
}


export default page