import React from 'react';
//import PropTypes from 'prop-types';

function IconSwitch (props) {
    return (
        <button onClick={props.onSwitch}><span className='material-icons'>{props.icon}</span></button>
    )
}

export default IconSwitch;