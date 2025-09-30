"use client";
import React, { Suspense, useState } from 'react'
import { Header } from '../components';
import Footer from '../components/Footer';
import AboutPages from '../components/AboutPages';

const page = () => {
  const [selectedServiceFromHeader, setSelectedServiceFromHeader] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
    <div  style={{backgroundImage: "url('/missionbg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '80vh',
    opacity: 2
    
    }}>
      <Suspense fallback={<></>}>
        <Header searchValue={searchValue} setSearchValue={setSearchValue}  setSelectedServiceFromHeader={setSelectedServiceFromHeader}/>
          </Suspense>
        <AboutPages/>
          <Footer/>
      </div>
    </div>
  )
}
export default page

