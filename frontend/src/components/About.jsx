import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <header className="about-header">
        <h2>About Me</h2>
        <p>A bit about who I am, what I do, and the work I love building.</p>
      </header>

      <div className="about-content">
        <p>
          I'm <strong>Ronnie Jackson</strong>, a Computer Science graduate from
          Middle Tennessee State University with a strong passion for building
          full-stack, AI-powered, and visually interactive applications. My
          experience includes developing tools across multiple domains—from
          comic book data automation and barcode systems to biomedical workflow
          prototypes, computer vision projects, and VR environments.
        </p>

        <p>
          I enjoy creating software that blends <strong>user experience</strong>,
          <strong> automation</strong>, and <strong>real-world interaction</strong>. 
          Whether I’m integrating LLMs into applications, designing intuitive 
          UIs in React, crafting API layers in Flask, or experimenting with 
          Unity and computer vision, I focus on building solutions that feel 
          smooth, purposeful, and practical.
        </p>

        <p>
          Outside of technical work, I bring years of hands-on experience
          troubleshooting <strong>POS systems</strong>, <strong>IoT devices</strong>, 
          and customer-facing workflows from my role at Publix. This helped me 
          develop strong communication, adaptability, and calm problem-solving 
          under pressure—skills I carry directly into my engineering work.
        </p>

        <p>
          I’m actively working on improving my engineering portfolio, expanding 
          my knowledge of AI integration, and exploring how technology can 
          enhance everyday experiences—whether for developers, collectors, 
          healthcare workers, or students.
        </p>
      </div>

      <div className="about-skills">
        <h3>Core Skills</h3>
        <ul>
          <li>React · JavaScript · Vite</li>
          <li>Python · Flask · REST APIs</li>
          <li>AI Integration · LLMs · Prompt Engineering</li>
          <li>Computer Vision · Data Processing</li>
          <li>Unity · C# · Interactive Environments</li>
          <li>Git · GitHub · Debugging & Testing</li>
        </ul>
      </div>
    </section>
  );
}
