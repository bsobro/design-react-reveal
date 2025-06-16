import React from 'react'
import { UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
    <div className="flex items-center flex-nowrap">
      
      
        <img src="/public/img/logo.png" width={50} height={50} alt="" />
        <span className="ml-1 text-2xl font-bold text-blue-900">Track</span><span className="text-2xl text-track">Staff</span>
      
      
    </div>
    </Link>
  )
}

export default Logo