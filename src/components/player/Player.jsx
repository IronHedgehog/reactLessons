// rafce

import { useRef } from "react";

// Якщо ми хочемо зробити так щоб перевикористовувати цей компонент ми маємо присилати сюди посилання
const Player = ({ source }) => {
  const playerRef = useRef();
  const play = () => {
    console.log(playerRef.current.play());
    // playerRef.current;
  };
  const stop = () => {
    console.log(playerRef.current.pause());
    playerRef.current.pause();
    // playerRef.current.time();
  };

  return (
    <>
      <div>
        <video ref={playerRef} src={source}>
          Your browser does not support the video tag.
        </video>
      </div>
      <div>
        <button onClick={play}>Play</button>
        <button onClick={stop}>Stop</button>
      </div>
    </>
  );
};

export default Player;
