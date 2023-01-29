import React from 'react';
import Items from './Items';
//import PropTypes from 'prop-types';

function ListView (props) {
    return (
        <div className='list-v'>{props.items}</div>
    )
}

export default ListView;