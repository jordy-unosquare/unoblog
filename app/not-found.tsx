import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>We did not find what you were looking for</h2>
      <Link href='/'>Go back</Link>
    </div>
  )
}

export default NotFound
