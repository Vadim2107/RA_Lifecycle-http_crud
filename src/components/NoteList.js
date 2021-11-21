import React, { useState } from 'react';
import Form from './Form';
import NoteItem from './NoteItem';
import ButtonUpdate from './ButtonUpdate';
import { nanoid } from 'nanoid';

function NoteList()  {

    const [form, setForm] = useState({
        title: "",
        id: ""
    });

    const [items, setItems] = useState([])
    // let nextId = 0;

    const onSubmit = evt => {
        evt.preventDefault();
        
        setItems(prevItems => ([...prevItems, {
            title: form.title,
            // id: nanoid()
            id: form.id
            // id: nextId++
        }]));

        console.log(items);

        setForm(prevForm => ({...prevForm, title: ""}));

        fetch(process.env.REACT_APP_PORT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
                // 'Content-Type': 'text/plain;charset=utf-8'
                
            },
            body: JSON.stringify(form)
            // body: form.title            
        })
        // .then(response => response.json())
        .then(response => response.text())
        .then(result => console.log(result.notes))
        .then(() => console.log('Прошел запрос POST'));

        fetch(process.env.REACT_APP_PORT)
        .then(response => response.json())
        .then(() => console.log('Прошел запрос GET после POST'));
    }

    const onChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setForm(prevForm => ({...prevForm, [name]: value, id: nanoid()}));
    }
    
    const onRemove = (id) => {
        setItems(prevItems => prevItems.filter(o => o.id !== id));        

        fetch(process.env.REACT_APP_PORT, {
            method: 'DELETE',

            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
        })
        // .then(response => response.json())
        .then(response => response.text())
        .then(() => console.log(id))
        .then(() => console.log('Прошел запрос DELETE'));

        fetch(process.env.REACT_APP_PORT)
        .then(response => response.json())
        .then(() => console.log('Прошел запрос GET после DELETE'));
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
