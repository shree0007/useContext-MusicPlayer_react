import { useState } from 'react';
import './App.css';
import { PlayerControls } from './components/PlayerControls';
import TrackList from './components/TrackList';
import { MusicContext } from './contexts/MusicContext';

import music1 from './assets/music1.mp3';
import music2 from './assets/music2.mp3';
import music3 from './assets/music3.mp3';



function App() {

  const [state, setState] = useState({
    audioPlayer: new Audio(music1),
    tracks: [
      {
        name: "Music 1",
        file: music1,
      },
      {
        name: "Music 2",
        file: music2,
      },
      {
        name: "Music 3",
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
        <h1>Music Player</h1>
        <PlayerControls />
        <TrackList />
      </div>
    </MusicContext.Provider>
  );
}

export default App;


