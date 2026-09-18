import { Link } from "react-router-dom";

function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <div className="status-pill">
            <span className="status-dot"></span>
            Building the digital future
          </div>

          <p className="eyebrow">
            SOFTWARE · AI · CLOUD
          </p>

          <h1>
            Technology for
            <br />
            <span>the ones who</span>
            <br />
            think differently.
          </h1>

          <p className="hero-text">
            Unsung Tech builds intelligent digital products for
            businesses ready to turn bold ideas into reality.
          </p>

          <div className="hero-buttons">

            <Link to="/services" className="primary-button">
              Explore what we build →
            </Link>

            <Link to="/contact" className="secondary-button">
              Start a conversation
            </Link>

          </div>

          <div className="hero-trust">

            <span>Trusted technology stack</span>

            <div className="tech-list">
              <span>REACT</span>
              <span>AI</span>
              <span>CLOUD</span>
              <span>JAVA</span>
            </div>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="hero-visual">

          <div className="grid-background"></div>

          <div className="orb orb-one"></div>
          <div className="orb orb-two"></div>

          <div className="floating-card card-top">
            <span className="mini-label">SYSTEM STATUS</span>

            <strong>ONLINE</strong>

            <div className="status-line"></div>
          </div>


          <div className="main-tech-card">

            <div className="terminal-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-content">

              <p className="comment">
                // Build something different.
              </p>

              <p>
                <span className="purple">const</span>{" "}
                future ={" "}
                <span className="blue">technology</span>;
              </p>

              <p>
                future.<span className="purple">build</span>();
              </p>

              <p>
                future.<span className="purple">scale</span>();
              </p>

              <div className="terminal-cursor">
                _
              </div>

            </div>

          </div>


          <div className="floating-card card-bottom">

            <span className="mini-label">
              INNOVATION
            </span>

            <div className="innovation-number">
              ∞
            </div>

            <span>
              No unnecessary limits.
            </span>

          </div>

        </div>

      </section>


      {/* MARQUEE */}

      <section className="marquee">

        <div>
          SOFTWARE
          <span>✦</span>
          ARTIFICIAL INTELLIGENCE
          <span>✦</span>
          CLOUD TECHNOLOGY
          <span>✦</span>
          DIGITAL PRODUCTS
          <span>✦</span>
        </div>

      </section>


      {/* INTRO */}

      <section className="intro-section">

        <div className="section-label">
          <span>01</span>
          WHO WE ARE
        </div>

        <div className="intro-content">

          <h2>
            We turn complicated
            <span> problems</span>
            into simple digital experiences.
          </h2>

          <p>
            Technology should solve problems, not create more of them.
            At Unsung Tech, we combine software engineering, artificial
            intelligence and cloud technologies to build products that
            are useful, scalable and built for the real world.
          </p>

          <Link to="/services" className="text-link">
            Discover our approach →
          </Link>

        </div>

      </section>


      {/* WHAT WE BUILD */}

      <section className="build-section">

        <div className="section-label">
          <span>02</span>
          WHAT WE BUILD
        </div>

        <div className="build-header">

          <h2>
            Digital systems
            <br />
            <span>with purpose.</span>
          </h2>

          <p>
            From the first line of code to the final deployment,
            we build technology around the problem you're trying
            to solve.
          </p>

        </div>


        <div className="build-grid">

          <div className="build-card large-card">

            <span className="card-number">01</span>

            <div className="build-icon">
              &lt;/&gt;
            </div>

            <h3>Digital Products</h3>

            <p>
              Web applications, platforms and digital experiences
              designed around real users and real business needs.
            </p>

            <Link to="/services">
              Learn more ↗
            </Link>

          </div>


          <div className="build-card">

            <span className="card-number">02</span>

            <div className="build-icon">
              ✦
            </div>

            <h3>Artificial Intelligence</h3>

            <p>
              Intelligent systems that automate work,
              process information and unlock new possibilities.
            </p>

            <Link to="/services">
              Learn more ↗
            </Link>

          </div>


          <div className="build-card">

            <span className="card-number">03</span>

            <div className="build-icon">
              ☁
            </div>

            <h3>Cloud Systems</h3>

            <p>
              Scalable infrastructure that keeps your
              applications reliable as they grow.
            </p>

            <Link to="/services">
              Learn more ↗
            </Link>

          </div>


          <div className="build-card">

            <span className="card-number">04</span>

            <div className="build-icon">
              ◇
            </div>

            <h3>Automation</h3>

            <p>
              Smarter workflows that reduce repetitive work
              and help teams focus on what matters.
            </p>

            <Link to="/services">
              Learn more ↗
            </Link>

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="stats-section">

        <div className="stat">

          <strong>20+</strong>

          <span>
            Digital projects
          </span>

        </div>

        <div className="stat">

          <strong>12+</strong>

          <span>
            Business partners
          </span>

        </div>

        <div className="stat">

          <strong>5+</strong>

          <span>
            Technology areas
          </span>

        </div>

        <div className="stat">

          <strong>24/7</strong>

          <span>
            Digital thinking
          </span>

        </div>

      </section>


      {/* CTA */}

      <section className="home-cta">

        <div className="cta-glow"></div>

        <p className="eyebrow">
          HAVE AN IDEA?
        </p>

        <h2>
          Let's build something
          <span> worth remembering.</span>
        </h2>

        <p>
          Great technology often starts with a simple conversation.
        </p>

        <Link to="/contact" className="primary-button">
          Start a project →
        </Link>

      </section>

    </main>
  );
}

export default Home;