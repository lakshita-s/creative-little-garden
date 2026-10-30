import "../css/tree.css";
import { useState, useRef } from "react";
import { Link } from "react-router";

function Tree({ markDone }) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);

  function lookAtWillow() {
    setStarted(true); // hides the picture, note and button; shows the video
    videoRef.current.play();
  }

  return (
    <div className="scene scene-tree">
      {/* 1. before the click: small picture + note + button */}
      {!started && (
        <>
          <img
            className="tree-pic framed"
            src="/assets/willow-tree.jpg" /* change to your picture */
            alt="the weeping willow"
          />

          <div className="post-it-note">
            The weeping willow here was planted in 1978 as a community effort, the
            first step in turning an abandoned lot into the garden that stands
            here today. Decades later, the tree and The Creative Little Garden
            are both flourishing. The willow lost a major branch several years
            ago, but it is still loved by the garden’s volunteers and the
            community, and is protected by the NYC Department of Parks &
            Recreation.
          </div>

          <button className="action-btn tree" onClick={lookAtWillow}>
            LOOK AT THE WILLOW TREE ?
          </button>
        </>
      )}

      {/* 2. after the click: the video at hero size */}
      <video
        className="hero-video framed"
        ref={videoRef}
        src="/assets/willow-tree.mp4"
        playsInline
        hidden={!started}
      />

      {started && (

        <Link
          className="action-btn back"
          to="/map"
          onClick={() => markDone("tree")}
        >
          &#9166;
        </Link>
      )}
    </div>
  );
}

export default Tree;