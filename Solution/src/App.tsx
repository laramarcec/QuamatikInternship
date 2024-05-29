import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/App.css'

const Navbar = React.lazy(() => import('./components/NavBar.tsx'));
const Home = React.lazy(() => import('./components/Home.tsx'));
const Redirect = React.lazy(() => import('./components/Redirect.tsx'));

function App() {

  return (
    <div>
      
      <Router>
      <Navbar></Navbar>
        <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A1/:option" element={<Redirect />} />
        </Routes>
        </Suspense>
      </Router>
    </div>
  )
}

export default App;
