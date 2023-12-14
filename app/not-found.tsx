'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>We did not find what you were looking for</h2>
      <Image src='https://res.cloudinary.com/dgjbgcmqm/image/upload/v1702575408/notfoun_g6ykim.jpg' alt='' width={200} height={200}/><br/>
      <Link href='/'>Go back</Link>
    </div>
  )
}

export default NotFound
