'use client'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>We did not find that post!</h2>
      <Link href='/'>Go back</Link>
    </div>
  )
}

export default NotFound
