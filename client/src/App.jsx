import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./pages/Home";
import Vendors from "./pages/Vendors"
import VendorDetails from "./pages/VendorDetails";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/vendors" element={<Vendors />} />
      <Route path="/vendor/:id" element={<VendorDetails />} /> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
