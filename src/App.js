import { useState } from 'react';
import './App.css';
import PlayerControls from './components/PlayerControls';
import TrackList from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';



function App() {

  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Track 1',
        file: ''
      },
      {
        name: 'Track 2',
        file: ''
      },
    ],
    currentTrackIndex: 0,
    isPlaying: false,

  })

  console.log("state", state)




  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <h1>Music Player</h1>
        <PlayerControls />
        <TrackList />
      </div>
    </MusicContext.Provider>
  );
}

export default App;


