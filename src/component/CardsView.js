import React from 'react';
import Items from './Items';
//import PropTypes from 'prop-types';

function CardsView (props) {
    return (
        <div className='card-v'>{props.cards}</div>
    )
}

export default CardsView;