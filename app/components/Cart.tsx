import React from "react";

function Cart() {
  return (
    <div className="bg-white w-[450px] shadow-lg">
      <div className="border-b-[2px] p-4 w-full font-bold"><p>Cart</p></div>
      <div className='flex items-center justify-center p-4'>
        <p>Your cart is empty.</p>
      </div>
    </div >
  )
}

export default Cart;