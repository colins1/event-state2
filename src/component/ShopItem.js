import React from 'react';
import PropTypes from 'prop-types';

function ListView (props) {
    return (
        <div className='poductSectorList'>{props.products}</div>
    )
}

export default ListView;