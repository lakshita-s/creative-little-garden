import { Link } from "react-router";
import { useState, useEffect } from "react";
import "../css/ladies-lunch.css";

function LadiesLunch({ markDone }) {
  const [started, setStarted] = useState(false);

  // download the gif in the background so it starts instantly on click
  useEffect(() => {
    new Image().src = "/assets/ladies-lunch.gif";
  }, []);

  return (
    <div className="scene scene-lunch">
      {/* 1. opening: one big video + button */}
      {!started && (
        <>
          <video
            className="hero-video framed"
            src="/assets/ladies-lunch-small.mp4"
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

      {/* 2. after the click: the gif + the note */}
      {started && (
        <div className="lunch-container">
          <img src="/assets/ladies-lunch.gif" alt="a lunch" />
          <div className="post-it-note">A sweet group of older women join the small tables together to enjoy a group lunch. They tell you they got this idea from Facebook, where someone suggested picking up food from nearby restaurants and eating it at the garden. It seems like this will become a regular occurance for them. You take a picture for them, and memorize their energy, to draw later, too shy to ask them to take a photo.</div>

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