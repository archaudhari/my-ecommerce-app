// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Header />
      <Route
        exact
        path="/"
        render={() => <ProductList products={products} />}
      />
      <Route
        path="/product/:id"
        render={({ match }) => (
          <ProductDetails
            product={products.find((p) => p.id === Number(match.params.id))}
            addToCart={addToCart}
          />
        )}
      />
      <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
    </Router>
  );
};
