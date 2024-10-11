'use client'

import React, { useState } from "react";
import Nav from "./components/Nav";
import ShowDetail from "./components/ShowDetail";
import { Product } from "./components/interface/interface";

export default function Home() {
  const [productAdded, setProductAdded] = useState<Product>();
  const [amountOfProduct, setAmountOfProduct] = useState<number>(0);

  return (
    <div className="h-screen flex flex-col">
      <Nav productAdded={productAdded} amountOfProduct={amountOfProduct} />
      <div className="grow flex items-center justify-center w-full">
        <ShowDetail sendProduct={(product: Product) => { setProductAdded(product) }} sendAmountOfProduct={(amount: number) => { setAmountOfProduct(amount) }} />
      </div>
    </div>
  );
}
