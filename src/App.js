import React from 'react';
import './App.css';
import NoteList from './components/NoteList';

class App extends React.Component {  
  
  render() {    
    return (
      <React.Fragment>
        <NoteList />
      </React.Fragment>
    );
  }
}

export default App;
