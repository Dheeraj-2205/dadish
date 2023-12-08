
import "./App.css";
import Cart from "./components/Cart/Cart.jsx";
import {  Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom';
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
      {/* <Footer/> */}
    </>
  );
}

export default App;
