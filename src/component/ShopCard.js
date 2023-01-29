import React from 'react';
import Items from './Items';
//import PropTypes from 'prop-types';

function ListView (props) {
    return (
        <div className='poductSectorCard'>
            <img src={props.products[0].img}/>
            <div>
                <h2>{props.products[0].name}</h2>
                <p>{props.products[0].color}</p>
            </div>
            <div>
                <p>{props.products[0].price}</p>
                <button>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ListView;