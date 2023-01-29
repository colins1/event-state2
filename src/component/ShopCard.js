import React from 'react';
//import PropTypes from 'prop-types';

function ListView (props) {
    return (
        <div className='poductSectorCard'>{props.products[0].name}</div>
    )
}

export default ListView;