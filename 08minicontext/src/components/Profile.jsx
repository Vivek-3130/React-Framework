import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const{user} = useContext(UserContext);

  if(!user) return <h1>Not Logged In</h1>

  return (
    <div>
        <h3>The Profile is of <i>{user.username}</i> and the password is "{user.password}"</h3>
    </div>
  )
}

export default Profile