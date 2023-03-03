import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Profile from './components/Profile'
import Home from './components/Home'
import Products from './components/Products'
import Admin from './components/Admin'
import Error from './components/Error'
import ProtectedRoute from './utils/ProtectedRoute'
import { useState } from 'react'


function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin">Admin</Link>
        <button onClick={() => setIsLogged(true)}>Login</button>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />} />
        <Route path='/admin' element={
          <ProtectedRoute isLogged={isLogged}>
            <Admin />
          </ProtectedRoute>
        } />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
