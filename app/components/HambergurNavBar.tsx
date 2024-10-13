import React from 'react';
import { CloseIcon } from './icons/Icon';

interface HamburgerNavBarProps {
  onClose: () => void;
}

function HambergurNavBar({ onClose }: HamburgerNavBarProps) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex">

      <div className='bg-white flex flex-col min-h-full pl-12 pt-12 pr-40'>
        <div
          className='cursor-pointer'
          onClick={onClose}
        >
          <CloseIcon />
        </div>
        <ul className='mt-8 space-y-4'>
          <li>
            <div className='hover:text-orange text-lg cursor-pointer'>Collection</div>
          </li>
          <li>
            <div className='hover:text-orange text-lg cursor-pointer'>Men</div>
          </li>
          <li>
            <div className='hover:text-orange text-lg cursor-pointer'>Women</div>
          </li>
          <li>
            <div className='hover:text-orange text-lg cursor-pointer'>About</div>
          </li>
          <li>
            <div className='hover:text-orange text-lg cursor-pointer'>Contact</div>
          </li>
        </ul>
      </div>
      {/* black overlay */}
      <div
        className='w-full h-full bg-black/60 cursor-pointer'
        onClick={onClose}
      ></div>
    </div>
  );
}

export default HambergurNavBar;
