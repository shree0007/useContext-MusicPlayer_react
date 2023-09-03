import { useState } from 'react';
import './App.css';
import { PlayerControls } from './components/PlayerControls';
import TrackList from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';

import music1 from './assets/music1.mp3';
import music2 from './assets/music2.mp3';
import music3 from './assets/music3.mp3';



function App() {

  const [state, setState] = useState({
    audioPlayer: new Audio(music1),
    tracks: [
      {
        name: "The paranormal is real",
        file: music1,
      },
      {
        name: "Lofi chill",
        file: music2,
      },
      {
        name: "Summer walk",
        file: music3,
      },
    ],
    currentTrackIndex: 0,
    isPlaying: false,

  })

  console.log("state", state)




  return (
    <MusicContext.Provider value={[state, setState]}>
      <div className="App">
        <h1 style={{ background: 'hsla(37, 100%, 53%, 1)', color: 'blue', padding: '1rem', marginBottom: '5rem' }}>Music Player <FontAwesomeIcon style={{ marginLeft: '1rem' }} icon={faHeadphones} beatFade /></h1>

        <PlayerControls />
        <TrackList />
      </div>
    </MusicContext.Provider>
  );
}

export default App;


