import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from '/src/components/Login.jsx';
import Profile from '/src/components/Profile.jsx'
import UserContext from './context/UserContext';
import UserContextProvider from './context/UserContextProvider';

function App() {
  const [count, setCount] = useState(0)

  return (
    // so that the app.jsx have the command on usercontextprovider
    <UserContextProvider>
      <h2>User Login Page</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
