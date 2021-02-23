import React, { useState } from 'react';
import Form from './Form';
import NoteItem from './NoteItem';
import ButtonUpdate from './ButtonUpdate';
import { nanoid } from 'nanoid';
// import moment from 'moment';

function NoteList()  {

    const [form, setForm] = useState({
        title: "",        
    });

    const [items, setItems] = useState([])

    const onSubmit = evt => {
        evt.preventDefault();

        setItems(prevItems => ([...prevItems, {
            title: form.title,  
            id: nanoid()
        }]));

        setForm(prevForm => ({...prevForm, title: ""}));

        let note = {
            id: 0,
            content: form.title
        }

        // fetch(process.env.REACT_APP_NOTES_URL, {
        fetch(process.env.REACT_APP_PORT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(note)
        })
        .then(response => response.json())
        .then(result => alert(result.notes));

        // fetch(process.env.REACT_APP_NOTES_URL)
        fetch(process.env.REACT_APP_PORT)
        .then(response => response.json())
        .then(notes => console.log(notes[0].title));
    }

    const onChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setForm(prevForm => ({...prevForm, [name]: value}));
    }
    
    const onRemove = (id) => {
        setItems(prevItems => prevItems.filter(o => o.id !== id));
    }

    const onUpdate = () => {
        alert('Update!!!');
    }

    return (
        <React.Fragment>
            <div className='container-update'>
                <span className='title'>Notes</span>
                <ButtonUpdate onUpdate={onUpdate}/>
            </div>
            
            <NoteItem 
                items = {items}
                onRemove = {onRemove} />
            <Form
                form = {form}
                onSubmit = {onSubmit}
                onChange = {onChange} />
        </React.Fragment>
    );
}

export default NoteList;
