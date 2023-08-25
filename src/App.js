import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Music Player</h1>
      <FontAwesomeIcon style={{ color: 'green', fontSize: '2rem', marginRight: '2rem' }} icon={faPlay} />
      <FontAwesomeIcon style={{ color: 'red', fontSize: '2rem' }} icon={faPause} />
    </div>
  );
}

export default App;
