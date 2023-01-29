import React from 'react';
import PropTypes from 'prop-types';
import Items from './Items';

function ListView (props) {
    return (
        <div className='poductSectorList'><h2>{props.products}</h2></div>
    )
}

export default ListView;