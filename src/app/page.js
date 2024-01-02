"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Mainheader from '@/_components/Header/Main-header/Mainheader'
import SubHeader from '@/_components/Header/Sub-header/SubHeader'
// import SliderSection from '@/_components/SliderSection/SliderSection'
// import SliderClientComponent from '@/_client-component/SliderClientComponent/SliderClientComponent'
import HomePage from '@/_client-component/HomePage/HomePage'
import Footer from '@/_components/Footer/Footer'
import { useEffect } from 'react'

export default function Home() {
  // useEffect(() => {
  //   const handleKeyPress = (event) => {
  //     // Disable Ctrl+U
  //     if (event.ctrlKey && event.key === 'u' ) {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener('keydown', handleKeyPress);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, []);
  return (
    <>
     <Mainheader />
     <SubHeader />
     <HomePage />
     <Footer />
    </>
  )
}
