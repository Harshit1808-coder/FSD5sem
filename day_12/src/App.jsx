import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';

const App = () => {
  const [products , setProducts] = useState([]);

  useEffect( () =>{
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  },[])

  console.log(products);

  return (
    <div>
      <Header />
      <Product  products={products}/>
      <Footer />
    </div>
  )
}

export default App
