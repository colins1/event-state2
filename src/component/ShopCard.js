import React from 'react';
import Items from './Items';
//import PropTypes from 'prop-types';

function ListView (props) {
    return (
        <div className='poductSectorCard'><h2>{props.products}</h2></div>
    )
}

export default ListView;