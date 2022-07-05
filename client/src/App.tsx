import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from './pages/Home'
import AdminPage from './pages/AdminPage'
import SystemAdminPage from './pages/SystemAdminPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/system-admin" element={<SystemAdminPage />} />
      </Routes>
    </div>
  )
}

export default App
