import "../css/images.css";
import { Link } from "react-router";

const gridImages = [
  "/assets/images/img-1.jpg",
  "/assets/images/img-2.jpg",
  "/assets/images/img-3.jpg",
  "/assets/images/img-5.jpg",
  "/assets/images/img-6.jpg",
  "/assets/images/img-7.jpg",
  "/assets/images/img-8.jpg",
  "/assets/images/img-9.jpg",
  "/assets/images/img-4.jpg",
];

function Images({ markDone }) {
  return (
    <div className="scene scene-images">
      <div className="images-layout">
        <div className="images-grid">
          {gridImages.map((src) => (
            <img key={src} className="framed" src={src} alt="" />
          ))}
        </div>

        <Link
          className="action-btn back"
          to="/map"
          aria-label="Back to map"
          onClick={() => markDone("images")}
        >
          &#9166;
        </Link>
      </div>
    </div>
  );
}

export default Images;
