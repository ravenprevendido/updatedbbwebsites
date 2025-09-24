"use client"
import React from 'react'
import { Header } from '../components'
import ContactPages from '../components/ContactPages'
import Footer from '../components/Footer'

const page = () => {
  return (
    <>
        <Header searchValue={''} setSearchValue={function (value: React.SetStateAction<string>): void {
              throw new Error('Function not implemented.')
          } }/>
          <ContactPages/>
          <Footer/>
    </>
  )
}


export default page

