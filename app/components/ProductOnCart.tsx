'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import product1 from './../components/images/image-product-1.jpg'
import { Delete } from "./icons/Icon";
import { ProductToCart } from './interface/interface';

interface ProductOnCartProps {
  product?: ProductToCart;
}

function ProductOnCart({ product }: ProductOnCartProps) {
  return (
    <div className='w-full'>
      {product && product?.amount > 0 ? (
        <div className="flex items-center justify-between gap-4 w-full">
          <div className="flex gap-4 items-center">
            <div>
              <Image
                src={product1}
                height={60}
                width={60}
                alt="product"
                style={{
                  borderRadius: ".2rem",
                }}
              />
            </div>
            <div>
              <p>{product && product.product.product_name}</p>
              <div className="flex gap-4">
                <p>{product && product.product.product_sale_price && (product.product.product_price - product.product.product_sale_price).toFixed(2)} <span>x</span> <span>{product && product.amount}</span></p>
                <p>${product && product.product.product_sale_price && ((product.product.product_price - product.product.product_sale_price) * product.amount).toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div
            className="cursor-pointer"
          // onClick={handleDelete}
          >
            <Delete />
          </div>
        </div>
      ) : (
        <div>
        </div>
      )}
    </div>
  )
}

export default ProductOnCart
