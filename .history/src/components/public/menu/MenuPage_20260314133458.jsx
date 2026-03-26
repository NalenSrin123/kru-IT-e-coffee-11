import React from 'react'
import Navbar from '../../Navbar'

import imgBackground from "../../../assets/images/coffee/coffeeBackground2.webp";

const MenuPage = () => {
  return (
    <>
        <div>
            <Navbar/>
            <div className='w-[90%] h-[300px] bg-amber-200 m-auto mt-5 rounded-2xl'>
                <img className='w-[100%] h-[100%] obje' src={imgBackground} alt="" />
            </div>
        </div>
    </>
  )
}

export default MenuPage