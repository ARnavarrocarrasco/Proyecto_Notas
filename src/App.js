import { useEffect, useState } from 'react';
import './App.css';
import { getNotes } from './controllers/frontController';
import Notes from './font/Notes'
import AtomicDesign from './font/AtomicDesign';

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes()
      .then(n => setNotes(n))
      .catch(e => console.error(e))
  }, [] )

  return (
    <div className="App">
      <h1>Bienvenido a la aplicación de Notas</h1>
      {/* <Notes notes = {notes}/> */}
      <AtomicDesign/>
    </div>
  );
}

export default App;
