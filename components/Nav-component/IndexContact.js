import React from 'react'
import Link from "next/link";

const IndexContact = () => {
  return (
    <>
    <Link href="/contact">
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="/contact"
      >
        Contact Us
      </a>
      </Link>
    </>
  )
}

export default IndexContact