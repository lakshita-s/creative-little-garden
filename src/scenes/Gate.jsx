import { useState } from "react";
import { Link } from "react-router";

function Gate() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="scene"
      style={{ backgroundImage: "url(/assets/bg-gate.webp)" }}
    >
      <div className="fullscreen-container gate">
        <img
          src={open ? "/assets/open-gate.png" : "/assets/closed-gate.png"}
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
          aria-label="Unlock the gate"
          onClick={() => setOpen(true)}
        />
      )}
    </div>
  );
}

export default Gate;
