import './App.css';
import { getNotes } from './controllers/frontController';
import Notes from './font/Notes'

function App() {
  return (
    <div className="App">
      <h1>Bienvenido a la aplicación de Notas</h1>
      <Notes notes = {getNotes()}/>
    </div>
  );
}

export default App;
