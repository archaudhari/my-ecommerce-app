// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>{product.name}</li>
    ))}
  </ul>
);

export default ProductList;

