import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useMusicPlayer } from '../hooks/useMusicPlayer';

const TrackList = () => {

    const music = useMusicPlayer();

    return (

        <div>

            {music.trackList.map((track, index) => (

                <div key={`${track}_${index}`}>

                    <button style={{ marginTop: '1rem' }} onClick={() => music.playTrack(index)}>

                        {music.isPlaying && music.currentTrackIndex === index ? (<FontAwesomeIcon icon={faPause} />) : (<FontAwesomeIcon icon={faPlay} />)}

                    </button>

                    <div>

                        Track Playing :{track.name}

                    </div>

                </div>

            ))}

        </div>

    )
};

export default TrackList;