"use client";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import React,{useState, useEffect} from 'react'

const BackToTop = () => {
  const [isBackToTop, setIsBackToTop] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > screen.height/2){
        setIsBackToTop(true)
      }
      else{
        setIsBackToTop(false)
      }
    })
  },[])

  const scrollUp = ()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  return (
    <>
    {
      isBackToTop && (
      <div className="fixed z-1000 right-12 bottom-20 h-16 w-16 text-[#ADB7BE] rounded-full bg-purple-500 hover:bg-purple-400 hover:text-white">
        <button
          className="h-full w-full relative"
          onClick={scrollUp}
        >
          <ChevronDoubleUpIcon className="h-12 w-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold"/>
        </button>
      </div>
    )}
    </>
  )
}

export default BackToTop
