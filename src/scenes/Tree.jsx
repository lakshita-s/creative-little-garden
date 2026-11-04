import "../css/tree.css";
import { useState, useRef } from "react";
import { Link } from "react-router";

function Tree({ markDone }) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);

  function lookAtWillow() {
    setStarted(true);
    videoRef.current.play();
  }

  return (
    <div className="scene scene-tree">
      {!started && (
        <>
          <img
            className="tree-pic framed"
            src="/assets/images/willow-tree.jpg"
            alt="the weeping willow"
          />

          <div className="post-it-note">
            The weeping willow here was planted in 1978 as a community effort,
            the first step in turning an abandoned lot into the garden that
            stands here today. Decades later, the tree and The Creative Little
            Garden are both flourishing. The willow lost a major branch several
            years ago, but it is still loved by the garden’s volunteers and the
            community, and is protected by the NYC Department of Parks &
            Recreation.
          </div>

          <button className="action-btn tree" onClick={lookAtWillow}>
            LOOK AT THE WILLOW TREE ?
          </button>
        </>
      )}

      <video
        className="hero-video framed"
        ref={videoRef}
        src="/assets/videos/willow-tree.mp4"
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
