import React from 'react';

interface IVideo {
  onEnded: () => void;
  source: any;
}

// ! policy google , autoplay must be muted
const Video: React.FC<IVideo> = ({onEnded, source}): React.ReactElement => {
  return (
    <video
      muted
      onEnded={onEnded}
      style={{height: '100%', width: '100%', objectFit: 'fill'}}
      src={source}
      autoPlay={true}
    />
  );
};

export default Video;
