import './App.css';
import React from 'react';
//import PropTypes from 'prop-types';
import {products} from './component/Items';
import Store from './component/Store';

function App() {
  return (
    <Store products={products}/>
  );
}

export default App;
