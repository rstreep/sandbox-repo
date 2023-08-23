import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet />
    </>
  )
}

export default App

