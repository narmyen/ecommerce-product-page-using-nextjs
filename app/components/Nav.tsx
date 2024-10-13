'use client'

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import ProfileImage from '../components/images/image-avatar.png';

import { Cart, Logo, MenuIcon } from './icons/Icon'
import CartComponent from './Cart';
import { Product, ProductToCart } from './interface/interface';
import HambergurNavBar from './HambergurNavBar';

interface NavProps {
  productAdded?: Product;
  amountOfProduct?: number;
}

function Nav({ productAdded, amountOfProduct }: NavProps) {
  const [onCartClick, setOnCartClick] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<ProductToCart>();
  const [isHamVisible, setIsHamVisible] = useState<boolean>(false);

  const handleCartDropDown = () => {
    setOnCartClick(!onCartClick)
  }

  useEffect(() => {
    console.log("Product Added:", productAdded);
    console.log("Amount of Product:", amountOfProduct);

    if (productAdded && typeof amountOfProduct === "number") {
      const updatedProduct: ProductToCart = {
        product: productAdded,
        amount: amountOfProduct,
      };
      setNewProduct(updatedProduct);
    }
  }, [productAdded, amountOfProduct]);

  const handleOnClickHamNavbar = () => {
    setIsHamVisible(!isHamVisible)
  }

  return (
    <div className='shadow-md px-8 relative'>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <div className='flex items-center gap-4 mr-8 hover:text-veryDarkBlue py-8'>
            <div
              className='hidden max-mobile:block cursor-pointer'
              onClick={() => {
                setIsHamVisible(!isHamVisible)
              }}
            >
              <MenuIcon />
            </div>
            <div><Logo /></div>
          </div>
          <ul className='flex items-center gap-4 cursor-pointer text-darkGrayishBlue max-mobile:hidden'>
            <li className='hover:text-veryDarkBlue hover:pb-2 border-2 border-transparent hover:border-b-2 hover:border-b-orange transition-all'>Colection</li>
            <li className='hover:text-veryDarkBlue hover:pb-2 border-2 border-transparent hover:border-b-2 hover:border-b-orange transition-all'>Men</li>
            <li className='hover:text-veryDarkBlue hover:pb-2 border-2 border-transparent hover:border-b-2 hover:border-b-orange transition-all'>Women</li>
            <li className='hover:text-veryDarkBlue hover:pb-2 border-2 border-transparent hover:border-b-2 hover:border-b-orange transition-all'>About</li>
            <li className='hover:text-veryDarkBlue hover:pb-2 border-2 border-transparent hover:border-b-2 hover:border-b-orange transition-all'>Contact</li>
          </ul>
        </div>

        <div className='flex gap-4 items-center '>
          <div
            className='cursor-pointer'
            onClick={handleCartDropDown}
          >
            <Cart />
          </div>
          <div className=''>
            <div
              className='h-[50px] w-[50px] cursor-pointer border-[3px] border-transparent hover:border-orange rounded-full transition-all duration-300'
            >
              <Image
                src={ProfileImage}
                alt="External Image"
                width={50}
                height={50}
              />

            </div>

          </div>
        </div>
      </div>
      {onCartClick && (
        <div className='z-99 cursor-default absolute top-16 right-0'>
          <CartComponent productWithAmount={newProduct} />
        </div>
      )}
      <div className={`${isHamVisible ? "hidden" : "fixed z-50"}`}>
        <HambergurNavBar onClose={handleOnClickHamNavbar} />
      </div>
    </div>
  )
}

export default Nav
