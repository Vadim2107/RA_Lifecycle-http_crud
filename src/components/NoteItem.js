import React from 'react';
import ButtonDel from './ButtonDel';

// function NoteItem(props)  {
class NoteItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = '';
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_PORT)
        .then(response => response.json());
    }

    render() {
        return (
            <div className="notes">
                {this.props.items.map(item =>
                    <div className="note-container" key={item.id}>
                        <div className="note-content">{item.title}</div>  
                        <ButtonDel onRemove={() => this.props.onRemove(item.id)} />
                    </div>
                )}
            </div>

        )
    }
}

export default NoteItem;
