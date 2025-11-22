import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset(); // clear form
    } else {
      setResult("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <header className="contact-header">
        <h2>Contact Me</h2>
        <p>
          Have a question about my projects or experience, or how I built
          something? Send me a message —
          it will go straight to my inbox.
        </p>
      </header>

      <form className="contact-form" onSubmit={onSubmit}>
        <input type="text" name="botcheck" style={{ display: "none" }} tabIndex="-1" autoComplete="off"/>

        <div className="contact-row">
          <div className="contact-field">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="e.g. Junior Software Engineer role"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>

        <button
          type="submit"
          className="btn btn--primary contact-submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {result && (
          <p className={`contact-status ${result.includes("❌") ? "error" : "success"}`}>
            {result}
          </p>
        )}
      </form>
    </section>
  );
}
