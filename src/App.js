import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import Items from './component/Items';
import Store from './component/Store';

function App() {
  let {products} = Items;
  return (
    <Store products={products}/>
  );
}

export default App;
