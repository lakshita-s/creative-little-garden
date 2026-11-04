//before: looping hero video + interaction button
//after:  the gif + a note + back link

import { Link } from "react-router";
import { useState, useEffect } from "react";
import "../css/ladies-lunch.css";

function LadiesLunch({ markDone }) {
  const [started, setStarted] = useState(false);

  return (
    <div className="scene scene-lunch">
      {!started && (
        <>
          <video
            className="hero-video framed"
            src="/assets/videos/ladies-lunch-small.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <button className="action-btn" onClick={() => setStarted(true)}>
            JOIN LUNCH
          </button>
        </>
      )}

      {started && (
        <div className="lunch-container">
          <img src="/assets/other/ladies-lunch.gif" alt="a lunch" />
          <div className="post-it-note">
            A sweet group of older women join the small tables together to enjoy
            a group lunch. They tell you they got this idea from Facebook, where
            someone suggested picking up food from nearby restaurants and eating
            it at the garden. It seems like this will become a regular occurance
            for them. You take a picture for them, and memorize their energy to
            draw later, too shy to ask them to take one with your own camera.
          </div>

          <Link
            className="action-btn back"
            to="/map"
            onClick={() => markDone("lunch")}
          >
            &#9166;
          </Link>
        </div>
      )}
    </div>
  );
}

export default LadiesLunch;
