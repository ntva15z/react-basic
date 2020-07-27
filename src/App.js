import React, { useState, useEffect, createContext, useReducer } from 'react';
import axios from 'axios';

import dataFake from './dataFake';
import Routers from './routers'
import { GlobalProvider } from './context/GlobalState';

function App() {

  const [products, setProducts] = useState(dataFake);
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState('green');


  const onHandleClick = () => {
    setColor('red');
  }
  const onHandleRemove = (id) => {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  }
  const onHanleAdd = (product) => {
    const newProduct = {
      id: products.length + 1,
      ...product
    }
    setProducts([
      ...products,
      newProduct
    ])
  }
  return (
    <div className="App">
      <GlobalProvider>
        <Routers products={products} onRemove={onHandleRemove} />
      </GlobalProvider>
    </div>
  )

}
export default App;