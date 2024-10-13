'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import product1 from '../components/images/image-product-1.jpg'
import product2 from '../components/images/image-product-2.jpg'
import product3 from '../components/images/image-product-3.jpg'
import product4 from '../components/images/image-product-4.jpg'
import { Product } from './interface/interface'


interface SlideImageProps {
  product: (mockProduct1: Product) => void;
}

const mockProduct1: Product = {
  product_id: 0,
  product_image: [product1, product2, product3, product4],
  product_description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga explicabo ab illo adipisci ipsum beatae qui culpa itaque facilis rerum.',
  product_name: 'Fall Limited Sneakers',
  product_owner: 'SNEAKER COMPANY',
  product_price: 255,
  product_sale_price: 105,
}

const products = [mockProduct1]

function SlideImage({ product }: SlideImageProps) {
  const [selectedImageId, setSelectedImageId] = useState<number>(0);

  useEffect(() => {
    console.log(selectedImageId)
    product(mockProduct1)
  }, [selectedImageId])

  const selectedData = products[0];

  return (
    <div className='max-[848px]:px-20 max-[740px]:px-0'>
      {/* Display the selected image */}
      <div className='w-full  flex items-center justify-center'>
        {selectedData && (
          <Image
            src={selectedData.product_image[selectedImageId]}
            height={720}
            width={720}
            alt='Selected product image'
            style={{
              borderRadius: "1rem"
            }}
          />
        )}
      </div>

      {/* Display thumbnails */}
      <div className='mt-4'>
        <ul className='flex items-center justify-between'>
          {selectedData.product_image.map((image, idx) => (
            <li
              key={idx}
              className={`${selectedImageId === idx ? 'border-orange' : ''} border-[3px] rounded-[.7rem] overflow-hidden border-transparent cursor-pointer hover:opacity-40 transition-all duration-300`}
              onClick={() => setSelectedImageId(idx)}
            >
              <div className={`${selectedImageId === idx ? 'opacity-40' : ''} relative w-[70px] h-[70px] max-[740px]:h-[80px] max-[740px]:w-[80px] `}>
                <Image
                  src={selectedData.product_image[idx]}
                  layout='fill' // Fills the parent container
                  alt={`Thumbnail ${idx + 1}`}
                  className="rounded-[.5rem] object-cover" // Ensures the image fills the space while maintaining aspect ratio
                />
              </div>

            </li>

          ))}
        </ul>
      </div>
    </div>
  )
}

export default SlideImage
