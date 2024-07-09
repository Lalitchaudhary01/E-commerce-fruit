import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import ProductListPage from './productListPage';
import ProductDetail from './productDetail';
import Navbar from "./navbar"
import Footer from "./footer"
import NotFound from "./notFound"


function App() {

  const saveDataString = localStorage.getItem("my-cart") || "{}"; 
  const savedData = JSON.parse(saveDataString);

  const [cart, setCart] = useState(savedData);

  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }

  const totalCount = Object.keys(cart).reduce(function(previous,current){
    return (+(previous) + +(cart[current]));
  },0);

  return (
    <div className="bg-gray-100 h-screen overflow-scroll flex flex-col">
      <Navbar productCount={totalCount} />
        <Routes>
          <Route index element={<ProductListPage />} />
          <Route path="/products/:id/" element={<ProductDetail onAddToCart={handleAddToCart} />} />
          <Route path="*" element={ <NotFound/> } />
        </Routes>
    <Footer />
    </div>
  );
}

export default App;
