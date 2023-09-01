import { faPause, faPlay, faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

const PlayerControls = () => {
    const music = useMusicPlayer();

    return (
        <div style={{ marginBottom: '2rem' }}>
            <div>
                <p>{music.currentTrackName}</p>
            </div>
            <button style={{ padding: '0.5rem', margin: '0.1rem', backgroundColor: 'orangered', color: 'white', border: 'none', borderRadius: '5px' }}>
                <FontAwesomeIcon
                    icon={faStepBackward}
                    onClick={music.playPreviousTrack}
                />
            </button>
            <button style={{ padding: '0.5rem', margin: '0.1rem', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }} onClick={music.togglePlay}>
                {music.isPlaying ? (
                    <FontAwesomeIcon icon={faPause} />)
                    : (
                        <FontAwesomeIcon icon={faPlay} />)}
            </button>
            <button style={{ padding: '0.5rem', margin: '0.1rem', backgroundColor: 'orangered', color: 'white', border: 'none', borderRadius: '5px' }}>
                <FontAwesomeIcon icon={faStepForward}
                    onClick={music.playNextTrack} />
            </button>
        </div>

    )


}

export { PlayerControls };