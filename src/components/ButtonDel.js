import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const del = <FontAwesomeIcon icon={faTimes} />;

function ButtonDel(props) {
    return (
        <button className="delete" onClick={props.onRemove}>{del}</button>
    )
}

export default ButtonDel;
