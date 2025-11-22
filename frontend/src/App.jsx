import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import profilePic from "./assests/profile.png"
import ContactForm from "./components/ContactForm";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <NavBar />

      {/* Hero */}
      <header className="hero" id="home">
        <div className="hero__content">
          <p className="hero__eyebrow">Software Engineer · Full-Stack · AI & Computer Vision</p>
          <h1>Hey, I'm Ronnie Jackson.</h1>
          <p className="hero__subtitle">B.S. Computer Science · Middle Tennessee State University</p>

          <p className="hero__tagline">
            I build user-centered full-stack and AI-powered applications using
            React, Flask, and computer vision — from comic book tools to
            biomedical workflows and VR experiences.
          </p>

          <div className="hero__chips">
            <span>Python</span>
            <span>C++</span>
            <span>C#</span>
            <span>C</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>SQL</span>
            <span>Unity</span>
            <span>AI Integration</span>
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__image">
          <img src={profilePic} alt="Ronnie Jackson" />
        </div>
      </header>

      <main>
        <About />

        <Projects />

        <ContactForm />
      </main>
    </div>
  );
}

export default App;
