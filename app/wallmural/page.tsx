"use client";

import { SetStateAction } from "react"
import { Header } from "../components"

import Wallmural from "../components/WallMural";
import Footer from "../components/Footer";
export default function WallMural() {
    return (
        <>
       <Header searchValue={""} setSearchValue={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.")
        } }/>
       <Wallmural>
        
       </Wallmural>
      
 
      <Footer/>
      </>
    )
}