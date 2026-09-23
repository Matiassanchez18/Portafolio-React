import { useEffect, useRef } from "react";
import vidGato from "../assets/gift.webm";
import "../css/GatoEstilo.css";

function Gato() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = 0.5;
  }, []);

  return (
    <div className="hero">
      <div className="video-container">
        <video ref={videoRef} autoPlay loop muted playsInline>
          <source src={vidGato} type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export default Gato;