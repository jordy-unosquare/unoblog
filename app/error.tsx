'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <div className='flex flex-col'>
      <h2>Something went wrong!</h2>
      <Image src='https://res.cloudinary.com/dgjbgcmqm/image/upload/v1702575387/Screenshot_2023-12-14_133722_tmrkzc.png' alt=''  width={200} height={200} />
      <br/><Link href='/'>Go back</Link>
    </div>
  )
}

export default Error
