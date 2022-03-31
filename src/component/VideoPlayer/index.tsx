import React from 'react';
// @ts-ignore
import Silence from 'assets/sound/silence.mp3';
// @ts-ignore
import Septium from 'assets/sound/Septium.mp3';

interface IVideo {
  onEnded: () => void;
  source: any;
  loop?: boolean;
}

// ! policy google , autoplay must be muted
const Video: React.FC<IVideo> = ({onEnded, source, loop = false}): React.ReactElement => {
  // @ts-ignore
  return (
    <>
      <iframe src={Silence} allow='autoplay' id='audio' style={{ display:'none' }}/>
      <audio autoPlay>
        <source src={Septium} type='audio/mp3' />
      </audio>
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
