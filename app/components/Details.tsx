'use client'
import React, { useState } from 'react'
import { Cart, CartOnBtn } from './icons/Icon'
import { Product } from './interface/interface';

interface DetailsProps {
  product?: Product;
  handleSend: (amountProduct: number) => void;
}

function Details({ product, handleSend }: DetailsProps) {
  const [numberOfProduct, setNumberOfProduct] = useState<number>(0);

  return (
    <div className=' w-full p-8 '>
      <h3 className='uppercase font-semibold text-darkGrayishBlue pb-4'>{product && product.product_owner}</h3>
      <h1 className='capitalize text-3xl font-bold text-veryDarkBlue pb-6'>{product && product.product_name}</h1>
      <p className='pb-4 text-darkGrayishBlue'>{product && product.product_description}</p>
      <div className='flex items-start gap-4'>
        <div>
          <p className='font-bold text-xl'>${product && product.product_sale_price ? (product.product_price - product.product_sale_price).toFixed(2) + "$" : product && product.product_price.toFixed(2) + "$"}</p>
          <p className='line-through decoration-[1.5px] decoration-darkGrayishBlue/70'>${product && product.product_price.toFixed(2) + "$"}</p>
        </div>
        <div className='cursor-default px-[.6rem] py-[0.2rem] bg-veryDarkBlue rounded-md  text-white font-bold' >
          <p>
            {product && product.product_sale_price
              ? ((product.product_sale_price / product.product_price) * 100).toFixed(2) + '%'
              : ''}
          </p>

        </div>
      </div>

      <div className='flex item-center justify-between gap-8 mt-4 select-none'>
        <div className='flex  rounded-md  items-center bg-lightGrayishBlue font-bold shadow-md'>
          <div onClick={() => { if (numberOfProduct > 0) { setNumberOfProduct(numberOfProduct - 1) } }} className='hover:text-orange cursor-pointer select-none h-full w-full px-[1rem] py-[.5rem]'>-</div>
          <div className='px-6'>{numberOfProduct}</div>
          <div onClick={() => { setNumberOfProduct(numberOfProduct + 1) }} className='hover:text-orange cursor-pointer h-full w-full px-[1rem] py-[.5rem]'>+</div>
        </div>
        <div
          className='cursor-pointer text-veryDarkBlue font-bold flex items-center px-4 gap-2  rounded-md bg-orange/50 shadow-md hover:shadow-none select-none'
          onClick={() => { handleSend(numberOfProduct) }}
        >
          <div className=''><CartOnBtn /></div>
          <div>
            <p>Add to Cart</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Details
