function Contact() {
  return (
    <main className="page">
      <section className="contact-section">
        <div className="contact-info">
          <p className="eyebrow">GET IN TOUCH</p>

          <h1>
            Let's build something
            <span> meaningful.</span>
          </h1>

          <p>
            Have an idea, business problem or project in mind?
            Tell us about it and let's explore what technology can do.
          </p>

          <div className="contact-details">
            <div>
              <strong>Email</strong>
              <p>hello@unsung.tech</p>
            </div>

            <div>
              <strong>Location</strong>
              <p>Zanzibar, Tanzania</p>
            </div>

            <div>
              <strong>Working Hours</strong>
              <p>Mon — Fri, 08:00 — 17:00</p>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email Address</label>
          <input type="email" placeholder="you@example.com" />

          <label>Project Type</label>
          <select>
            <option>Web Development</option>
            <option>AI Solution</option>
            <option>Cloud Solution</option>
            <option>Digital Transformation</option>
          </select>

          <label>Tell us about your project</label>
          <textarea
            rows="5"
            placeholder="Describe your idea..."
          ></textarea>

          <button type="button">Send Message →</button>
        </form>
      </section>
    </main>
  );
}

export default Contact;