import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  }, [])

  console.log(products);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product" element={<Product products={products}></Product>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
      <Header />
      <Product products={products} />
      <Footer />
    </div>
  )
}

export default App
