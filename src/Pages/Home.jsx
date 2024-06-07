import React from 'react'
import Navber from '../Components/Navber'

const Home = () => {
  return (
    <>
    <Navber/>
    <div className=''>
      <img src="public/img/Header.png " alt="" />      
    </div>
    <div className="container">
        <div className="text absolute top-[350px] mx-60">
          <h1 className=' mx-8 flex justify-center align-middle font-poppins text-7xl font-extrabold text-white'>Welcome to </h1>
          <h1 className=' mx-8 flex justify-center align-middle font-poppins text-7xl font-extrabold text-white'><span className='text-orange-600 pr-3'>eMarketing </span> shop</h1>
        <div className="btn mx-48 pt-4">
        <input type="text" className=' p-2  rounded-xl ms-14'/>
        <button className='bg-white p-2 rounded-xl hover:bg-[#082859] mx-2'>Search</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home