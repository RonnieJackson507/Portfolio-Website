import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">

        <p className="footer__name">© {year} Ronnie Jackson</p>

        <div className="footer__social">
          <a
            href="https://github.com/RonnieJackson507"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="footer__icon"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 1.5.8 1.5.3.7 1.2.5 1.5.4.1-.5.4-.9.6-1.1-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.7 11.7 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.7 1 .7 2v2.9c0 .3.2.7.8.6A10.9 10.9 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/ronnie-jackson-raj507"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="footer__icon"
            >
              <path d="M20.45 20.45h-3.6v-5.6c0-1.3 0-3-1.8-3s-2 1.4-2 2.9v5.7h-3.6V9h3.5v1.6h.1A3.8 3.8 0 0 1 17 9c3.4 0 4 2.2 4 5v6.5zM5.34 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13h-3.6V9h3.6v11.4zM22.2 0H1.8A1.7 1.7 0 0 0 0 1.7v20.5C0 23 1 24 1.8 24h20.5c.8 0 1.7-.8 1.7-1.8V1.7C24 1 23.1 0 22.2 0z" />
            </svg>
          </a>

          <a
            href="/Ronnie_Jackson_Resume.pdf"
            download
            aria-label="Download Resume"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="footer__icon"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 18H6V4h7v5h5v11z"/>
              <path d="M12 18l4-4h-3v-4h-2v4H8l4 4z"/>
            </svg>
          </a>
        </div>

        <p className="footer__tech">Built with React & Vite</p>

      </div>
    </footer>
  );
}
