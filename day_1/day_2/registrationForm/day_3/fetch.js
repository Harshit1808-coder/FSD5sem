let product = []
const getproductsData = async()=>{
    console.log("inside");
    
     const res = await fetch("https://dummyjson.com/products");
     const data = await res.json();
  products = data.products;
  product.map((product)=>consolr.log(product));
  const priceGreater
}

getproductsData();

product.map((product)=>consolr.log(product));


// fetch("https://dummyjson.com/products")
// .then((res)=>res.json())
// .then((data)=>console.log(data.products))
// .catch((error) =>console.log(error));
