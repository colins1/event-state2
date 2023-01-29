import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Items from './Items';
import Store from './Store';

function App() {
  let {products} = Items

  return (
    <Store products={products}/>
  );
}

export default App;
