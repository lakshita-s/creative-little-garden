import { useState } from "react";
import { Link } from "react-router";

function Gate() {

    // false = closed gate with the lock button, true = open gate with ENTER
  const [open, setOpen] = useState(false);

  return (
    <div
      className="scene"
      style={{ backgroundImage: "url(/assets/backgrounds/bg-gate.webp)" }}
    >
      <div className="fullscreen-container gate">
        <img
          src={open ? "/assets/images/open-gate.png" : "/assets/images/closed-gate.png"}
          alt="gate"
        />
        {open && <p className="title">CREATIVE LITTLE GARDEN</p>}
      </div>

      {open ? (
        <Link className="action-btn" to="/map">
          ENTER
        </Link>
      ) : (
        <button
          className="lock-btn"
          aria-label="unlock the gate"
          onClick={() => setOpen(true)}
        />
      )}
    </div>
  );
}

export default Gate;
