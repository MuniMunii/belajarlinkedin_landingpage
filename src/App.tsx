import { useEffect,useRef } from 'react'
import {ReactLenis}from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import { cancelFrame,frame } from 'motion'
import './App.css'
import Header from './components/Header'
import HeroSections from './components/Hero'
import FeaturesSections from './components/Features'
import TestimonialSections from './components/Testimonial'
import FooterSections from './components/Footer'

function App() {
  const lenisRef=useRef<LenisRef>(null)
  useEffect(()=>{
    function update(data:{timestamp:number}){
      const time=data.timestamp
      lenisRef.current?.lenis?.raf(time)
    }
    frame.update(update,true)
    return () => cancelFrame(update)
  },[])
  return (
    <ReactLenis root options={{autoRaf:false,smoothWheel:true,syncTouch:true,duration: 1.1}} ref={lenisRef}>
      <Header/>
      <HeroSections/>
      <FeaturesSections/>
      <TestimonialSections/>
      <FooterSections/>
    </ReactLenis>
  )
}

export default App
