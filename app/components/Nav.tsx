import React from 'react'
import Image from "next/image";
import ProfileImage from '../components/images/image-avatar.png';

import { Cart, Logo } from './icons/Icon'

function Nav() {
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
          <div className='cursor-pointer'><Cart /></div>
          <div className='cursor-pointer'>
            <Image
              src={ProfileImage}
              alt="External Image"
              width={50} // กำหนดความกว้าง
              height={50} // กำหนดความสูง
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
