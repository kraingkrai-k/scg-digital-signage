import React from 'react';
// @ts-ignore
import Silence from 'assets/sound/silence.mp3';

interface IVideo {
  onEnded: () => void;
  source: any;
  loop?: boolean;
}

const Video: React.FC<IVideo> = ({onEnded, source, loop = true}): React.ReactElement => {
  // @ts-ignore
  return (
    <>
      <iframe src={Silence} allow='autoplay' id='audio' style={{ display:'none' }}/>
      <video
        muted={false}
        loop={loop}
        onEnded={onEnded}
        style={{height: '100%', width: '100%', objectFit: 'fill'}}
        src={source}
        autoPlay={true}
      />
    </>

  );
};

export default Video;
