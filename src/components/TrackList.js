import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const TrackList = () => {

    const music = useMusicPlayer();

    return (

        <div style={{ background: 'hsla(37, 100%, 53%, 1)' }}>

            {music.trackList.map((track, index) => (

                <div style={{ display: 'flex' }} key={`${track}_${index}`}>

                    <button style={{ margin: '0.8rem', padding: '0.5rem', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }} onClick={() => music.playTrack(index)}>

                        {music.isPlaying && music.currentTrackIndex === index ? (<FontAwesomeIcon icon={faPause} />) : (<FontAwesomeIcon icon={faPlay} />)}

                    </button>



                    <p style={{ marginLeft: '1rem' }}>{track.name}</p>



                </div>

            ))}

        </div>

    )
};

export default TrackList;