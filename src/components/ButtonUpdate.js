import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
const update = <FontAwesomeIcon icon={faSyncAlt} />;

function ButtonUpdate(props) {
    return (
        <button className="update" onClick={props.onUpdate}>{update}</button>
    )
}

export default ButtonUpdate;
