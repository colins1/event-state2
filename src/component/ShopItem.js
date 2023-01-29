import React from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

function ListView (props) {
    return (
        <div>
            {props.products.map( (product) => {<div className='poductSectorList'>
            <img src={product.img}/>
            <div>
                <h2>{product.name}</h2>
                <p>{product.color}</p>
            </div>
            <div>
                <p>{product.price}</p>
                <button>ADD TO CART</button>
            </div>
        </div>})}
        </div>
    )
}

export default ListView;