import React from 'react';
import PropTypes from 'prop-types';

function ListView (props) {
    return (
        <div className='list-v'>{props.items}</div>
    )
}

export default ListView;

ListView.propTypes = {
    items: PropTypes.instanceOf(Object).isRequired
}