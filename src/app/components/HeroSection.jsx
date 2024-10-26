//error when import react-type-animation
"use client";
import React from 'react'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='mt-16'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className=" col-span-8 place-self-center text-center sm:text-left"
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello, I'm {" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  'Nomel',
                  3000,
                  'Web Developer',
                  3000,
                  'Mobile Developer',
                  3000,
                  'Tester',
                  3000
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Fugit neque doloremque, aliquid placeat nemo, voluptatum.
          </p>
          <div>
            <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-300 text-white'>Hire me</button>
            <button className='px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white border border-white mt-2'>Download CV</button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt='hero-image'
              //image center
              className=' absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection;