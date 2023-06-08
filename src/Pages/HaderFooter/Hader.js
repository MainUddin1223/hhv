import React from 'react'
import { Link } from 'react-router-dom'

const Hader = () => {
 return (
    <nav className="flex justify-center space-x-4 bg-red-800 font-semibold">
      <Link to="/home" className="text-red-100 py-1 text-2xl">
        Home
      </Link>
      <Link to="/home" className="text-red-100 text-white py-1 text-2xl">
        About
      </Link>
      <Link to="/home" className="text-red-100 text-white py-1 text-2xl">
        News
      </Link>
      <Link to="/home" className="text-red-100 text-white py-1 text-2xl">
        Sports
      </Link>
    </nav>
  )
}
export default Hader
