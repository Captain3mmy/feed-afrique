import React from 'react'
import Link from "next/link";

const IndexServices = () => {
  return (
    <>
    <Link href="/services">
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="/services"
      >
        Services
      </a>
      </Link>
    </>
  )
}

export default IndexServices