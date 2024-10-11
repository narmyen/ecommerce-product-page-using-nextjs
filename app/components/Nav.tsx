'use client'

import React, { useState } from 'react'
import Image from "next/image";
import ProfileImage from '../components/images/image-avatar.png';

import { Cart, Logo } from './icons/Icon'
import CartComponent from './Cart';

function Nav() {
  const [onProfileClick, setOnProfileClick] = useState<boolean>(false);

  const handleCartDropDown = () => {
    setOnProfileClick(!onProfileClick)
  }

  return (
    <div className='shadow-md px-8'>
      <div className='flex items-center justify-between'>
        <ul className='flex items-center gap-4 cursor-pointer text-darkGrayishBlue'>
          <li className='mr-8 hover:text-veryDarkBlue py-8'><div><Logo /></div></li>
          <li className='hover:text-veryDarkBlue hover:pb-2 border-2 border-transparent hover:border-b-2 hover:border-b-orange transition-all'>Colection</li>
          <li className='hover:text-veryDarkBlue hover:pb-2 border-2 border-transparent hover:border-b-2 hover:border-b-orange transition-all'>Men</li>
          <li className='hover:text-veryDarkBlue hover:pb-2 border-2 border-transparent hover:border-b-2 hover:border-b-orange transition-all'>Women</li>
          <li className='hover:text-veryDarkBlue hover:pb-2 border-2 border-transparent hover:border-b-2 hover:border-b-orange transition-all'>About</li>
          <li className='hover:text-veryDarkBlue hover:pb-2 border-2 border-transparent hover:border-b-2 hover:border-b-orange transition-all'>Contact</li>
        </ul>
        <div className='flex gap-4 items-center '>
          <div
            className='cursor-pointer'
            onClick={handleCartDropDown}
          >
            <Cart />
          </div>
          <div className='relative'>
            <div
              className='cursor-pointer border-[3px] border-transparent hover:border-orange rounded-full transition-all duration-300'
            >
              <Image
                src={ProfileImage}
                alt="External Image"
                width={50}
                height={50}
              />

              {onProfileClick && (
                <div className=' cursor-default absolute -bottom-32 -right-8'>
                  <CartComponent />
                </div>
              )}

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
