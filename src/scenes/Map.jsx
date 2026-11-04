import "../css/map.css";
import { Link } from "react-router";

function Map({ go, done }) {
  return (
    <div className="scene-map">
      <Link className="action-btn back" to="/">
        &#9166;
      </Link>
      <div className="container">
        <div className="post-it-note">
          The Creative Little Garden was founded in 1978, after the building
          occupying the site was burned down (due to a bankruptcy crisis in NYC
          at the time, this was common and most community gardens in the LES
          have with this origin.) It was established by Francoise Cachelin, an
          outspoken individual and community rights advocate; former member of
          the French Resistance.
        </div>
        <div className="map-view">
          <img src="/assets/images/map.png" alt="map" />
          <Link
            className={
              "map-btn bench" + (done.includes("bench") ? " done" : "")
            }
            to="/bench"
          >
            broken bench
          </Link>
          <Link
            className={"map-btn meal" + (done.includes("meal") ? " done" : "")}
            to="/meal"
          >
            have a meal
          </Link>
          <Link
            className={
              "map-btn lunch" + (done.includes("lunch") ? " done" : "")
            }
            to="/ladies-lunch"
          >
            ladies lunch
          </Link>
          <Link
            className={
              "map-btn swing" + (done.includes("swing") ? " done" : "")
            }
            to="/swing"
          >
            swing
          </Link>
          <Link
            className={"map-btn tree" + (done.includes("tree") ? " done" : "")}
            to="/willow-tree"
          >
            willow tree
          </Link>
          <Link
            className={
              "map-btn gallery" + (done.includes("gallery") ? " done" : "")
            }
            to="/gallery"
          >
            random image collection
          </Link>
        </div>
        <div className="post-it-note two">
          It is located at 530 East 6th St, NY 10009, and is referred to as “an
          oasis of tranquility”. Maintained by volunteers, it is a ‘community
          backyard’. It is open to public in the afternoon, all days of the
          week.
        </div>
      </div>
    </div>
  );
}

export default Map;
