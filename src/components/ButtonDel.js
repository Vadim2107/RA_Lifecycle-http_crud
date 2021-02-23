import React from 'react';

function ButtonDel(props) {
    return (
        <button className="delete" onClick={props.onRemove}>X</button>
    )
}

export default ButtonDel;
