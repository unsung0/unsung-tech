function Services() {
  const services = [
    {
      number: "01",
      title: "Web Development",
      text: "Modern, responsive websites and web applications built around your business needs."
    },
    {
      number: "02",
      title: "AI Solutions",
      text: "Intelligent systems that automate tasks, analyze information and improve decision making."
    },
    {
      number: "03",
      title: "Cloud Solutions",
      text: "Reliable cloud infrastructure that allows your applications to grow with your business."
    },
    {
      number: "04",
      title: "Digital Transformation",
      text: "We help traditional businesses adopt technology and build better digital experiences."
    }
  ];

  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">WHAT WE DO</p>

        <h1>
          Technology built
          <span> for your next move.</span>
        </h1>

        <p>
          We create practical digital solutions that help organizations
          work smarter, move faster and grow.
        </p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.number}>
            <span>{service.number}</span>

            <h2>{service.title}</h2>

            <p>{service.text}</p>

            <div className="arrow">↗</div>
          </div>
        ))}
      </section>

      <section className="process">
        <p className="eyebrow">OUR PROCESS</p>

        <h2>Simple. Focused. Effective.</h2>

        <div className="process-grid">
          <div>
            <strong>01</strong>
            <h3>Discover</h3>
            <p>We understand the problem and define the opportunity.</p>
          </div>

          <div>
            <strong>02</strong>
            <h3>Build</h3>
            <p>We design and develop a solution around your goals.</p>
          </div>

          <div>
            <strong>03</strong>
            <h3>Launch</h3>
            <p>We deploy, improve and help your product grow.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;