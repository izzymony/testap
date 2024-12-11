import React from 'react'
import Link from 'next/link'
const button = () => {
  return (
    <div>
       <Link href={"/page1"}>
  <button className="btn">Go to Page 1</button>
</Link>
    </div>
  )
}

export default button
