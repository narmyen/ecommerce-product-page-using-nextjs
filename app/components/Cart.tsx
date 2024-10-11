import Image from "next/image";
import React, { useEffect } from "react";
import ProductOnCart from "./ProductOnCart";
import { ProductToCart } from "./interface/interface";

interface CartProps {
  productWithAmount?: ProductToCart;
}

function Cart({ productWithAmount }: CartProps) {

  useEffect(() => {
    console.log(productWithAmount)
  }, [productWithAmount])


  return (
    <div className="bg-white w-[450px] shadow-lg transition-all duration-300 pb-6 rounded-md">
      <div className="border-b-[2px] p-4 w-full font-bold"><p>Cart</p></div>
      <div className='flex flex-col items-center gap-2 p-4'>
        <ProductOnCart product={productWithAmount} />
      </div>
      <div className="cursor-pointer shadow-md hover:shadow-none mx-8 py-2 bg-orange rounded-md text-veryDarkBlue  font-bold text-center ">
        <p className=" capitalize">Checkout</p>
      </div>
    </div >
  )
}

export default Cart;