
function IconSwitch (props) {
    return (
        <button onClick={props.onSwitch}><span className='material-icons'>{props.icon}</span></button>
    )
}