import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function SearchBar({onClickStock}) {
  return (
    <div>
      <input type="text" placeholder="Search"/>
      <input type="checkbox" onChange={(e)=>{
        onClickStock(e.target.checked)}}/>
    </div>
  )
}

function ProductTable({products}) {
  return (
    <div>
      <span>Product Category</span>
      <ProductCategory products={products}/>
    </div>
  )
}

function ProductCategory({products}) {
  return (
    <div>
      {
        products.map((product, index) => {return <ProductItem product={product}/>}
        )
      }
    </div>
  )
}

function ProductItem({product}) {
  function InStock (){
    return <span className="product-in-stock">In Stock</span>;
  }
  function OutOfStock (){
    return <span className="product-out-of-stock">Out of Stock</span>;
  }
  return (
    <div>
      <span>{product.name}</span>
      <span>{product.price}</span>
      {/* <span className={product.inStock ? "product-in-stock" : "product-out-of-stock"}>{product.inStock ? "In Stock" : "Out of Stock"}</span> */}
      {product.inStock ? <InStock/> : <OutOfStock/>}
      <span>{product.category}</span>
    </div>
  )
}

function FilterProductTable() { 
  const initData = [
          {
            "name": "iPhone 17",
            "price": 5999,
            "inStock": true,
            "category": "electronics"
          },
          {
            "name": "iPhone 17 Air",
            "price": 7999,
            "inStock": true,
            "category": "electronics"
          },
          {
            "name": "iPhone 17 Pro",
            "price": 8999,
            "inStock": false,
            "category": "electronics"
          }
          ];
  const [InStock, setInStock] = useState(false);
  function handleOnclick(value) {
    console.log(value);
    setInStock(value);
  }     
  return (
    <div>
      <SearchBar onClickStock={handleOnclick}/>
      {JSON.stringify(InStock)}
      <ProductTable products={initData}/>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <FilterProductTable/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
