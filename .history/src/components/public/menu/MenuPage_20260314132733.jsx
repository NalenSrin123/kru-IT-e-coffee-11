import React from 'react'
import Navbar from '../../Navbar'
import coffeeBackground2 from "../../../assets/images/coffee/coffeeBackground2";


const MenuPage = () => {
  return (
    <>
        <div>
            <Navbar/>
            <div className='w-[90%] h-[300px] bg-amber-200 m-auto mt-5 rounded-2xl'>
                <img src="coffeeBackground2" alt="" />
            </div>
        </div>
    </>
  )
}

export default MenuPage