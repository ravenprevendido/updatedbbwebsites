'use client';
import React from 'react'
import { Header } from '../components';
import PvcLanyard from '../components/PvcLanyard';
import Footer from '../components/Footer';

const page = () => {
  return (
    <>
      <Header searchValue={''} setSearchValue={function (value: React.SetStateAction<string>): void {
        throw new Error('Function not implemented.');
      } }/>
      <PvcLanyard/>
      <Footer/>
    </>
  )
}

export default page
