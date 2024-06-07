import React from 'react'
import Navber from '../Components/Navber'

const Services = () => {
  return (
    <>
    <Navber/>
    <div className="container">
      <div className="flex justify-between">
        <div className="img">
          <img src="public/img/grp_img.png" alt="photos" />
        </div>
        <div className="text mt-44">
          <h1 className='text-6xl font-poppins font-extrabold'>Our services</h1>
          <p className='w-[571px] pt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque tenetur corporis asperiores eos, dicta corrupti quidem libero expedita recusandae quasi quos sint ex quisquam, quo blanditiis qui. Aliquid, tempore? Nobis.</p>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Services