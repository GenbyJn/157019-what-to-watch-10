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
    <video height={175} width={280} loop ref={videoRef} src={film.previewVideoLink} muted poster={film.previewImage} />

  );
}

export default VideoPlayer;
