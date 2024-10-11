'use client'
import React, { useState } from 'react'
import { Cart } from './icons/Icon'

function Details() {
  const [numberOfProduct, setNumberOfProduct] = useState<number>(0);

  return (
    <div className=' w-full text-xl p-14'>
      <h3 className='uppercase text-xl font-semibold text-darkGrayishBlue pb-4'>SNEAKER COMPANY</h3>
      <h1 className='capitalize text-5xl font-bold text-veryDarkBlue pb-6'>Fall Limited Sneakers</h1>
      <p className='pb-4 text-xl text-darkGrayishBlue'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo ab illo adipisci ipsum beatae qui culpa itaque facilis rerum.</p>
      <div className='flex items-start gap-4'>
        <div>
          <p className='font-bold text-2xl'>$150.00</p>
          <p className='line-through decoration-[1.5px] decoration-darkGrayishBlue/70'>$255.00</p>
        </div>
        <div className='cursor-default bg-veryDarkBlue rounded-md px-[1rem] py-[0.5rem] text-white font-bold' >
          <p>-50%</p>
        </div>
      </div>

      <div className='flex gap-8 pt-4'>
        <div className='flex px-[1rem] py-[.5rem] items-center gap-8 bg-lightGrayishBlue font-bold shadow-md'>
          <div onClick={() => { setNumberOfProduct(numberOfProduct - 1) }} className='hover:text-orange cursor-pointer'>-</div>
          <div>{numberOfProduct}</div>
          <div onClick={() => { setNumberOfProduct(numberOfProduct + 1) }} className='hover:text-orange cursor-pointer'>+</div>
        </div>
        <div className='cursor-pointer text-veryDarkBlue font-bold flex gap-1 items-center justify-center px-[3rem] py-[.5rem] rounded-md bg-orange/50 shadow-md hover:shadow-none'>
          <div><Cart /></div>
          <p>Add to Cart</p>
        </div>
      </div>

    </div>
  )
}

export default Details
