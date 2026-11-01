import "../css/swing.css";
import { useState, useRef } from "react";
import { Link } from "react-router";

const gridVideos = [
  "/assets/swing2.mp4",
  "/assets/swing3.mp4",
  "/assets/swing1.mp4",
];

function Swing({ markDone }) {
  const [started, setStarted] = useState(false);
  const gridRefs = useRef([]);

  function sitOnSwing() {
    setStarted(true); // hides the big video + button, shows the grid
    gridRefs.current.forEach((video) => video && video.play());
  }

  return (
    <div className="scene scene-swing">
      {/* 1. opening: one big video + button */}
      {!started && (
        <>
          <video
            className="hero-video framed"
            src="/assets/swing.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <button className="action-btn" onClick={sitOnSwing}>
            SIT ON THE SWING ?
          </button>
        </>
      )}

      {/* 2. after the click: 2x2 grid = 3 videos + the note */}
      <div className="swing-layout" hidden={!started}>
        <div className="swing-grid">
          {gridVideos.map((src, i) => (
            <video
              key={src}
              className="framed"
              ref={(el) => (gridRefs.current[i] = el)}
              src={src}
              playsInline
              loop
              preload="auto"
            />
          ))}

          <div className="post-it-note">
            You see a woman sitting on the swing, and she tells you that she
            loves this garden, and especially the swing. She comes by whenever
            she can, because she lives in the neighborhood and doesn't have a
            backyard, but gets the feeling of it here.
          </div>
        </div>

        <Link
          className="action-btn back"
          to="/map"
          onClick={() => markDone("swing")}
        >
          &#9166;
        </Link>
      </div>
    </div>
  );
}

export default Swing;