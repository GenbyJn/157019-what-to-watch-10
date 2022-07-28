import { useEffect, useRef } from 'react';
import { Film } from '../../types/film';

const TIMEOUT = 1000;

type VideoPlayerProps = {
  film: Film
  activeCard: number
};


function VideoPlayer({ film, activeCard }: VideoPlayerProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeCard === film.id) {
        videoRef.current?.play();
      }},
    TIMEOUT
    );

    if (activeCard !== film.id) {
      videoRef.current?.pause();
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activeCard, film.id]);

  return (
    <video height="100%" width="100%" src={film.previewVideoLink} poster={film.previewImage} loop ref={videoRef} muted />

  );
}

export default VideoPlayer;
