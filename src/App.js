import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import {products} from './Items';
import Store from './Store';

function App() {
  return (
    <Store products={products}/>
  );
}

export default App;
