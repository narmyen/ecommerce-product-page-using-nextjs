import React from 'react'
import Image from 'next/image'
import product1 from '../components/images/image-product-1.jpg'

function SlideImage() {
  return (
    <div className=' w-full flex items-center justify-center'>
      <Image
        src={product1}
        height={650}
        width={650}
        alt='product1'
        style={{
          borderRadius: "1.5rem"
        }}
      />

    </div>
  )
}

export default SlideImage
