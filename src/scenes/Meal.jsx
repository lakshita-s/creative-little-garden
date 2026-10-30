import "../css/meal.css";
import { useState, useRef } from "react";
import { Link } from "react-router";

function Meal({ markDone }) {
  const [started, setStarted] = useState(false);
  const videoRef = useRef(null);

  function talkToElla() {
    setStarted(true); // hides the button
    videoRef.current.play();
  }

  return (
    <div className="scene scene-meal">
      <div className="post-it-note">
        Someone sits on the bench, that you fixed, eating a meal, just like
        Anthony. Turns out there's a Thai restaurant on the same street, that
        doesn't have any seating, so both Anthony and Ella came here to eat
        their meal; seems to be a common thing!
      </div>

      {!started && (
        <button className="action-btn" onClick={talkToElla}>
          TALK TO ELLA?
        </button>
      )}

      <div className="video-ella">
        <video
          className="framed"
          ref={videoRef}
          src="/assets/mealwella-small.mp4"
          playsInline
        />

        <Link
          className="action-btn back"
          to="/map"
          onClick={() => markDone("meal")}
        >
          &#9166;
        </Link>
      </div>
    </div>
  );
}

export default Meal;
