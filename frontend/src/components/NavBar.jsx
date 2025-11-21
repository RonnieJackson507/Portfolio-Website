import { useState } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo / Name */}
        <a href="#home" className="nav-logo">
         Ronnie<span>Jackson</span>
        </a>

        {/* Desktop Links */}
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          <li><a href="/Ronnie_Jackson_Resume.pdf" download="Ronnie_Jackson_Resume.pdf" className="resume-btn" onClick={() => setOpen(false)}>Resume</a></li>

          {/* Right side icons */}
          <li className="nav-icons">
            <a
              href="https://github.com/RonnieJackson507"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ronnie-jackson-raj507"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
    </nav>
  );
}