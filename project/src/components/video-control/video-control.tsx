type VideoControlProps = {
  title: string,
  isPlaying: boolean,
  onTogglePlay: () => void,
  onToggleFullscreen: () => void,
}

const VideoControl = (props: VideoControlProps): JSX.Element => {
  const { title, isPlaying, onTogglePlay, onToggleFullscreen } = props;

  return (
    <div className="player__controls-row">
      {
        isPlaying
          ? (
            <button
              type="button"
              className="player__play"
              onClick={ onTogglePlay }
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"/>
              </svg>
              <span>Pause</span>
            </button>
          )
          : (
            <button
              type="button"
              className="player__play"
              onClick={ onTogglePlay }
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
          )
      }
      <div className="player__name">{ title }</div>

      <button
        type="button"
        className="player__full-screen"
        onClick={onToggleFullscreen}
      >
        <svg viewBox="0 0 27 27" width="27" height="27">
          <use xlinkHref="#full-screen"/>
        </svg>
        <span>Full screen</span>
      </button>
    </div>
  );
};

export default VideoControl;
