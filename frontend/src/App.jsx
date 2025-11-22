import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import profilePic from "./assests/profile.png"
import ContactForm from "./components/ContactForm";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <div className="app">
      

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
            <a href="/Ronnie_Jackson_Resume.pdf" className="btn btn--ghost">
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <img src={profilePic} alt="Ronnie Jackson" className="hero__image"/>
        </div>
      </header>

      <main>
        <About />

        <Projects />

        <ContactForm />
      </main>
    </div>

    <Footer />
    </>
  );
}

export default App;
