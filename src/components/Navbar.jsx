import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const eventScroll = () => {
    if (window.scrollY > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    setActive(false);
  };

  window.addEventListener("scroll", eventScroll);

  const setActiveSlideShow = () => {
    if (active) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <nav className={scrolled ? "active" : ""}>
      <ul>
        <li className="ariel">
          <h3>Catatan App</h3>
        </li>
        <li className="navigation">
          <ul>
            <li>
              <a href="#perkenalan">Belanja</a>
            </li>
            <li>
              <a href="#skill">Wishlist</a>
            </li>
            <li>
              <a href="#contact">Tugas</a>
            </li>
          </ul>
        </li>
        <li className="tri">
          <button className="slideBoxBtn" onClick={setActiveSlideShow}>
            <i
              className={active ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </button>
        </li>
      </ul>
      <div
        className={
          active ? "slideBoxActive slideBox" : "slideBoxNotActive slideBox"
        }
      >
        <h2 className="navbarheader">Navigation Bar</h2>
        <ul>
          <li>
            <a href="#perkenalan" onClick={() => setActive(false)}>
              Belanja
            </a>
          </li>
          <li>
            <a href="#skill" onClick={() => setActive(false)}>
              Wishlist
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActive(false)}>
              Tugas
            </a>
          </li>
        </ul>
        <footer>
          <a href="https://github.com/THRG1170/ariel-blog">Source Code</a>
        </footer>
      </div>
    </nav>
  );
}

export default Navbar;
