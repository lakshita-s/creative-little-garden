import "../css/gallery.css";
import { Link } from "react-router";

const gridGallery = [
  "/assets/gallery/img-1.jpg",
  "/assets/gallery/img-2.jpg",
  "/assets/gallery/img-3.jpg",
  "/assets/gallery/img-5.jpg",
  "/assets/gallery/img-6.jpg",
  "/assets/gallery/img-7.jpg",
  "/assets/gallery/img-8.jpg",
  "/assets/gallery/img-9.jpg",
  "/assets/gallery/img-4.jpg",
];

function Gallery({ markDone }) {
  return (
    <div className="scene scene-gallery">
      <div className="gallery-layout">
        <div className="gallery-grid">
          {gridGallery.map((src) => (
            <img key={src} className="framed" src={src} alt="" />
          ))}
        </div>

        <Link
          className="action-btn back"
          to="/map"
          onClick={() => markDone("gallery")}
        >
          &#9166;
        </Link>
      </div>
    </div>
  );
}

export default Gallery;
