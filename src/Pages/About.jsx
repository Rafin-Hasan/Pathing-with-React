import React from 'react'
import Navber from '../Components/Navber'

const About = () => {
  return (
    <>
    <Navber/>
    <div class="img absolute z-10">
      <img src="public/img/bg.png" alt="banner" />
    </div>
    <div className="container">
      <div className="text mt-48">
      <div className="heading w-[686px] ">
        <h1 className='text-6xl font-poppins font-extrabold z-40'>We Are Digital <span className='text-orange-600'>Marketing</span> Agency</h1>
      </div>
      <div className="sub_heading">
      <p className='w-[571px] pt-4'>Use customer data to build great and solid product experiences that convert. Digital marketing’s development has changed the way brands and businesses use technology for marketing. </p>
      </div>
      </div>
    </div>
    </>
  )
}

export default About