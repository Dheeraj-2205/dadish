import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddData from "./components/AddData/AddData.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/cart" element={<AddData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
