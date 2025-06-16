import React from 'react'
import { UsersRound } from 'lucide-react'

const Logo = () => {
  return (
    <div className="flex items-center flex-nowrap">
      
        <UsersRound size= {24} stroke="currentColor" strokeWidth={2} className="text-track pb-[1px]"/>
        <span className="ml-1 text-2xl font-bold text-blue-900">Track</span><span className="text-2xl text-track">Staff</span>
      
    </div>
  )
}

export default Logo