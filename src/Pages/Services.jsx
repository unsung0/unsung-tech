function Services() {
  return (
    <main className="page">
      <div className="page-header">
        <h1>
          What we <span>build.</span>
        </h1>
        <p>
          Four areas, one team. Whatever the project, we start from the
          same question: what does this actually need to work well?
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <span>01</span>
          <div className="arrow">↗</div>
          <h2>Web &amp; software</h2>
          <p>
            Full-stack applications, SaaS platforms, business systems and
            APIs, built to handle real users and real data from day one.
          </p>
        </div>

        <div className="service-card">
          <span>02</span>
          <div className="arrow">↗</div>
          <h2>Artificial intelligence</h2>
          <p>
            AI integrations and automation that take on repetitive work,
            so your team can spend time on what actually needs a person.
          </p>
        </div>

        <div className="service-card">
          <span>03</span>
          <div className="arrow">↗</div>
          <h2>Cloud infrastructure</h2>
          <p>
            Hosting and deployment set up to stay reliable as traffic
            grows, without you having to think about servers.
          </p>
        </div>

        <div className="service-card">
          <span>04</span>
          <div className="arrow">↗</div>
          <h2>Digital transformation</h2>
          <p>
            Turning paper processes and spreadsheets into systems your
            whole team can actually use.
          </p>
        </div>
      </div>

      <div className="process">
        <p className="eyebrow">HOW WE WORK</p>
        <h2>From idea to launch.</h2>

        <div className="process-grid">
          <div>
            <strong>01</strong>
            <h3>Understand</h3>
            <p>
              A short discovery call to map out what the system actually
              needs to do, before any code gets written.
            </p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Build</h3>
            <p>
              We build in stages you can see and react to, instead of
              disappearing for months and returning with a surprise.
            </p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Launch &amp; support</h3>
            <p>
              We deploy, hand over documentation, and stay reachable for
              fixes and small changes after launch.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Services;
