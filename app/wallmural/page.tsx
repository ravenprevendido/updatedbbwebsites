"use client";

import { SetStateAction, Suspense, useState } from "react"
import { Header } from "../components"

import Wallmural from "../components/WallMural";
import Footer from "../components/Footer";
export default function WallMural() {
     const [searchValue, setSearchValue] = useState("");
    const [selectedServiceFromHeader, setSelectedServiceFromHeader] = useState<string | null>(null);
      
    return (

        <>
        <Suspense fallback={<></>}>
       <Header searchValue={searchValue} setSearchValue={setSearchValue} setSelectedServiceFromHeader={setSelectedServiceFromHeader}/></Suspense>
       <Wallmural>
        
       </Wallmural>
      <Footer/>
      </>
    )
}