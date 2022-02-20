import React, { useState } from 'react'

const CardDetails = () => {
  const [quantity, setQuantity] = useState(1)
  const [inputWidth, setInputWidth] = useState(36)
  return (
    <div className='grid grid-cols-1 text-justify gap-5 md:gap-7 max-w-sm'>
      <span className='text-sm md:text-lg leading-5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu felis
        ultrices tempus pulvinar odio. Vitae senectus non, vitae id.{' '}
      </span>
      <span className='text-center text-2xl md:text-4xl'>0.00x ETH</span>
      <div
        className='flex justify-between items-center rounded-lg p-4 text-xs h-14'
        style={{ border: '1px solid #D3D3D3' }}
      >
        <p>NFT Minted</p>
        <p>0000/4444</p>
      </div>
      <div
        className='flex justify-between items-center rounded-lg px-4 text-xs h-14'
        style={{ border: '1px solid #D3D3D3' }}
      >
        <p>Quantity</p>
        <div className='text-2xl'>
          <button
            className='w-9'
            onClick={() => {
              if (quantity === 0) return
              setInputWidth((3 + quantity.toString().length) * 9)
              setQuantity((prev) => prev - 1)
            }}
          >
            -
          </button>
          <input
            className='text-center rounded-md'
            style={{ border: '1px solid #D3D3D3', width: inputWidth }}
            value={Number(quantity).toString()}
            type='number'
            pattern='[0-9]*'
            onChange={(e) => {
              let realNum = 0
              if (e.target.value === '') realNum = 0
              else realNum = Number(e.target.value)
              console.log(realNum)
              setInputWidth((3 + realNum.toString().length || 1) * 9)
              setQuantity(realNum)
            }}
          />
          <button
            className='w-9'
            onClick={() => {
              setInputWidth((3 + quantity.toString().length) * 9)
              setQuantity((prev) => prev + 1)
            }}
          >
            +
          </button>
        </div>
      </div>
      <button
        className='flex justify-center items-center rounded-lg text-sm md:text-xl font-normal h-14'
        style={{ background: '#FFD101' }}
      >
        <p>CONNECT WALLET</p>
      </button>
    </div>
  )
}

export default CardDetails
