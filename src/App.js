import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = notes.filter((note, noteIndex) => noteIndex !== index);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Memo App</h1>
        <div className="note-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your note here"
          />
          <button onClick={handleAddNote}>Add Note</button>
        </div>
        <div className="note-list">
          {notes.map((note, index) => (
            <div key={index} className="note-item">
              <span>{note}</span>
              <button onClick={() => handleDeleteNote(index)}>Delete</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
