'use client'

import React, { useEffect, useState } from "react";
import SlideImage from "./SlideImage";
import Details from "./Details";
import { Product } from "./interface/interface";

interface ShowDetailProps {
  sendProduct: (product: Product) => void;
  sendAmountOfProduct: (amountOfProduct: number) => void;
}


function ShowDetail({ sendProduct, sendAmountOfProduct }: ShowDetailProps) {

  const [product, setProduct] = useState<Product>();
  const [amountOfProduct, setAmountOfProduct] = useState<number>(0);

  const handleReceiveProductInfo = (product: Product) => {
    setProduct(product)
    console.log("product in ShowDetail:", product)
  }

  const handleAddtoCart = (amount: number) => {
    setAmountOfProduct(amount);
  }

  useEffect(() => {
    if (product) {
      sendProduct(product);
    }
  }, [product]);

  useEffect(() => {
    sendAmountOfProduct(amountOfProduct);
  }, [amountOfProduct]);

  return (
    <div className="flex flex-row justify-center items-center mt-8 gap-8 px-32 w-full h-full">
      <SlideImage product={handleReceiveProductInfo} />
      <Details product={product} handleSend={handleAddtoCart} />
    </div>
  )
}

export default ShowDetail;
