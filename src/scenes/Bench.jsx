import "../css/bench.css";
import { useState, useRef } from "react";
import { Link } from "react-router";

function Bench({ markDone }) {
  const [step, setStep] = useState("intro"); // intro -> videos -> end
  const [finished, setFinished] = useState(0);
  const audioRef = useRef(null);

  function videoEnded() {
    const count = finished + 1;
    setFinished(count);
    if (count === 2) {
      setTimeout(() => {
        setStep("end");
        audioRef.current.play();
      }, 600);
    }
  }

  return (
    <div className="scene scene-bench">
      {step === "intro" && (
        <>
          <div className="fullscreen-container">
            <img src="/assets/bench.png" alt="broken bench" />
          </div>
          <div className="post-it-note">
            You ask a volunteer, interrupting his moment of fixing something,
            about his connection with the garden. He gives you his story, and
            the story of the garden too; the history of it all. Later on, he,
            Norman, comes up to you and your friend and says, "which one of you is stronger?"
            You both shrug and go over to help him. The next hour is spent
            fixing two broken benches; you have accidentally become a volunteer.
          </div>
          <button className="action-btn" onClick={() => setStep("videos")}>
            FIX BROKEN BENCH ?
          </button>
        </>
      )}

      {step === "videos" && (
        <>
          <div className="post-it-note two">
            The person you were talking to before, Anthony, who was at the
            garden to eat his meal from Terra Thai, is intrigued. He joins you
            three in fixing the benches. You succeed, with this team effort;
            what a random collection of people, bought together by complete
            randomness, and also not, as the garden contained it.
          </div>
          <div className="video-row">
            <video
              className="hammer framed"
              src="/assets/hammer-bench.mp4"
              playsInline
              onClick={(e) => e.currentTarget.play()}
              onEnded={videoEnded}
            />
            <video
              className="drill framed"
              src="/assets/drill-bench.mp4"
              playsInline
              onClick={(e) => {
                e.currentTarget.playbackRate = 0.5;
                e.currentTarget.play();
              }}
              onEnded={videoEnded}
            />
          </div>
        </>
      )}

      {step === "end" && (
        <>
          <div className="fullscreen-container">
            <img src="/assets/fixed-bench.jpg" alt="fixed bench" />
          </div>

        <Link
          className="action-btn back"
          to="/map"
          onClick={() => markDone("bench")}
        >
          &#9166;
        </Link>
        </>
      )}

      <audio ref={audioRef} src="/assets/clapping.mp4" />
    </div>
  );
}

export default Bench;