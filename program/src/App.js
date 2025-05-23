import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About.js';
import Users from './components/Users.js';
import UserDetail from './components/UserDetail.js';
import Products from './components/Proudcts.js';
import ProductDetail from './components/ProductDetail.js';
import NotFound from './components/NotFound.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1>React Router Demo</h1>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>
                Users
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
                Products
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UserDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;