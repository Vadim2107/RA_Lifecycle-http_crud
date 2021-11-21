import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
const add = <FontAwesomeIcon icon={faPlay} />;


function Form(props) {
    const {form, onSubmit, onChange} = props;
    
    return (
        <div className='form-container'>
            <h4 className='form-title'>New Note</h4>
            <form onSubmit={onSubmit} id='form'>
                <div className='form'>                
                    <textarea className='form-content' name="title" value={form.title} onChange={onChange} required></textarea>
                </div>
                <button type="submit" className="submit" onClick={onSubmit}>{add}</button>
            </form>
        </div>
    );
}

export default Form;