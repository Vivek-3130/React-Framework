import React from 'react'
import { useParams } from 'react-router-dom'

// this is for dynamic routing
function Users() {
    const {userid} = useParams();
  return (
    <div className='bg-orange-500 text-black text-2xl text-center
    py-3 font-bold font-mono'>Users {userid}</div>
  )
}

export default Users