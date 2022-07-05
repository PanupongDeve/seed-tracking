import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from './pages/Home'
import Location from './pages/Location'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  )
}

export default App
