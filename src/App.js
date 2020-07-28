import React, { useState, useEffect } from 'react';
import dataFake from './dataFake';
import Routers from './routers';
import apiRequest from './api/productApi';
function App() {

  const [products, setProducts] = useState([]);

  // Hiển thị product từ localStorage
  useEffect(() => {
    const getProducts = async () => {
      try {
        const {data} = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        
      }
    }
    getProducts()
  }, []);


  // Xóa sản phẩm
  const onHandleRemove = (id) => {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  }
  // Thêm sản phẩm
  const onHandleAdd = (product) => {
    const newProduct = {
      id: products.length + 1,
      ...product
    }
    setProducts([
      ...products,
      newProduct
    ])
    localStorage.setItem('products', JSON.stringify(products))
  }


  // Cập nhật product 
  const onHandleUpdate = (updateProduct) => {
    const newProducts = products.map(product => (
      product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts);
  }


  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} />
    </div>
  )

}
export default App;