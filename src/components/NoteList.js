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

    const refresh = async () => {
        await fetch(process.env.REACT_APP_PORT)
        .then(response => response.json())
        .then(() => console.log('Прошел запрос GET!!!'));
    }

    const onSubmit = async (evt) => {
        evt.preventDefault();
        
        setItems(prevItems => ([...prevItems, {
            title: form.title,
            id: form.id
        }]));

        setForm(prevForm => ({...prevForm, title: ""}));

        await fetch(process.env.REACT_APP_PORT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(form)
        })
        .then(response => response.text())
        .then(() => console.log('Прошел запрос POST'));
        await refresh();
    }

    const onChange = ({target}) => {
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setForm(prevForm => ({...prevForm, [name]: value, id: nanoid()}));
    }
    
    const onRemove = async (id) => {
        setItems(prevItems => prevItems.filter(o => o.id !== id));        

        await fetch(process.env.REACT_APP_PORT, {
            method: 'DELETE',

            headers: {
                'Content-Type': 'text/plain;charset=utf-8'
            },
        })
        .then(response => response.text())
        .then(() => console.log('Прошел запрос DELETE'));
        await refresh();
    }

    const onUpdate = () => {
        refresh();
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
