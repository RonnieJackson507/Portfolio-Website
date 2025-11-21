import { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { name, email, subject, message } = form;

    // simple validation
    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const mailTo = "RonnieJ507@gmail.com"; // your address (not shown in UI)
    const mailSubject =
      subject.trim() !== ""
        ? `[Portfolio] ${subject}`
        : `[Portfolio] Message from ${name}`;
    const mailBody =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`;

    const mailtoLink =
      "mailto:" +
      encodeURIComponent(mailTo) +
      "?subject=" +
      encodeURIComponent(mailSubject) +
      "&body=" +
      encodeURIComponent(mailBody);

    // Open the user's email client with pre-filled content
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section" id="contact">
      <header className="contact-header">
        <h2>Contact Me</h2>
        <p>
          Have a question about my projects, experience, or how I built
          something? Send me a message and I’ll get back to you.
        </p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-row">
          <div className="contact-field">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="contact-field">
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            placeholder="e.g. Junior Software Engineer role"
          />
        </div>

        <div className="contact-field">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Tell me a bit about what you're looking for..."
          />
        </div>

        {error && <p className="contact-error">{error}</p>}

        <button type="submit" className="btn btn--primary contact-submit">
          Open Email to Send
        </button>

        <p className="contact-hint">
          This will open your email app with the message filled in. You can
          review and send it from there.
        </p>
      </form>
    </section>
  );
}
