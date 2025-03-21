import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Signin from './pages/Signin'
import About from './pages/about'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

const App = () => {
  return (
  
        <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="about" element={<About />} />
             <Route path="sign-in" element={<Signin />} />
             <Route path="sign-up" element={<Signup />} />
             <Route path="dashboard" element={<Dashboard />} />
             <Route path="projects" element={<Projects />} />
            

          </Routes>

        </BrowserRouter>
      
  )
}

export default App