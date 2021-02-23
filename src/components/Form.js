import React from 'react';

function Form(props) {
    const {form, onSubmit, onChange} = props;
    
    return (
        <div className='form-container'>
            <h4 className='form-title'>New Note</h4>
            <form onSubmit={onSubmit}>
                <div className='form'>                
                    <textarea className='form-content' name="title" value={form.title} onChange={onChange} required></textarea>
                </div>
                <button type="submit" className="submit" onClick={onSubmit}>ADD</button>
            </form>
        </div>
    );
}

export default Form;