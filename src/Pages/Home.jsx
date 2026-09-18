import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">DIGITAL INNOVATION COMPANY</p>

          <h1>
            We build technology
            <span> without limits.</span>
          </h1>

          <p className="hero-text">
            Unsung Technologies helps businesses turn ambitious ideas
            into powerful digital products using modern software, AI and
            cloud technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/services" className="primary-button">
              Explore Services →
            </Link>

            <Link to="/contact" className="secondary-button">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="circle"></div>

          <div className="code-card">
            <p>// Build. Innovate. Scale.</p>
            <p>
              <span>const</span> future = technology;
            </p>
            <p>future.build();</p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <h2>20+</h2>
          <p>Projects Delivered</p>
        </div>

        <div>
          <h2>12+</h2>
          <p>Business Partners</p>
        </div>

        <div>
          <h2>5+</h2>
          <p>Technology Areas</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>Digital Support</p>
        </div>
      </section>

      <section className="intro-section">
        <p className="eyebrow">WHY UNSUNG?</p>

        <h2>
          From an idea in your head
          <br />
          to a product in the world.
        </h2>

        <p>
          We combine software engineering, artificial intelligence and
          cloud technologies to create digital solutions designed for
          real-world problems.
        </p>
      </section>
    </main>
  );
}

export default Home;
