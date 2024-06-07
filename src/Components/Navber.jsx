import React from 'react'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <>
    <nav className='p-5 bg-transparent'>
    <div className="container">
        <div className="manu_row flex gap-20 items-center">
        <div className="logo">
            <a href="#">
                <img src="public/img/Logo.png" alt="logo" />
            </a>
        </div>
        <div className="menu">
            <ul className='flex gap-5 text-xl font-poppins font-bold text-indigo-950'>
                <li className='hover:bg-[#082859] hover:text-white hover: rounded-md'><Link to ="/">Home</Link></li>
                <li className='hover:bg-[#082859] hover:text-white hover: rounded-md'><Link to ="/services">Services</Link></li>
                <li className='hover:bg-[#082859] hover:text-white hover: rounded-md'><Link to ="/about">About</Link></li>
                <li className='hover:bg-[#082859] hover:text-white hover: rounded-md'><Link to ="/contact">Contact</Link></li>
            </ul>
        </div>
        </div>
    </div>
    </nav>
    
    
    </>
  )
}

export default Navber