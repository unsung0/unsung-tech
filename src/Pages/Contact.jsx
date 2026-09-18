import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="page">
      <div className="contact-section">
        <div className="contact-info">
          <p className="eyebrow">GET IN TOUCH</p>
          <h1>
            Let's start a <span>conversation.</span>
          </h1>
          <p>
            Tell us what you're trying to build. We'll get back to you
            within a couple of days with honest feedback on scope and
            timeline.
          </p>

          <div className="contact-details">
            <div>
              <strong>EMAIL</strong>
              <p>hello@unsungtech.co.tz</p>
            </div>
            <div>
              <strong>LOCATION</strong>
              <p>Zanzibar, Tanzania</p>
            </div>
            <div>
              <strong>RESPONSE TIME</strong>
              <p>Usually within 48 hours</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your name" required />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="you@email.com"
            required
          />

          <label htmlFor="project">Project type</label>
          <select id="project" defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            <option value="web">Web or software</option>
            <option value="ai">AI / automation</option>
            <option value="cloud">Cloud infrastructure</option>
            <option value="other">Something else</option>
          </select>

          <label htmlFor="message">Tell us about it</label>
          <textarea
            id="message"
            rows="5"
            placeholder="What are you trying to build?"
            required
          ></textarea>

          <button type="submit">
            {submitted ? "Message sent ✓" : "Send message"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
