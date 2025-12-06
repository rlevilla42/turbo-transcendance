// ⬇️ Import des outils React Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// ⬇️ Import des composants/pages
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Me from "./pages/Me";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./services/RequireAuth";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      {/* 🔝 La barre de navigation est toujours visible */}
      <Navbar />

      {/* 🛣️ Les routes de l'application */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/me" element={
        <RequireAuth>
          <Me />
          </RequireAuth>}
          />
        <Route path="/dashboard" element={
        <RequireAuth>
          <Dashboard />
        </RequireAuth>}
        />
      </Routes>
    </Router>
  )
}

export default App