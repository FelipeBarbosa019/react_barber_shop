function Services() {
  const styles = {
    page: {
      height: "100%",
      width: "100%",
      margin: 0,
      padding: "2rem 5%",
      backgroundColor: "#f9f9f9",
      color: "#333",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      marginBottom: "2rem",
      textAlign: "center",
      color: "#0B8C7F",
    },
    section: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      alignItems: "start",
    },
    serviceCard: {
      backgroundColor: "#F0F8FF",
      border: "1px solid #B0C4DE",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "1.5rem",
      transition: "transform 0.2s, box-shadow 0.2s",
      textAlign: "center",
    },
    serviceCardHover: {
      transform: "scale(1.02)",
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#0B8C7F",
      marginBottom: "1rem",
    },
    description: {
      fontSize: "1rem",
      color: "#666",
      marginBottom: "1.5rem",
      lineHeight: "1.6",
    },
    ctaButton: {
      backgroundColor: "#0B8C7F",
      color: "#FFFFFF",
      padding: "0.8rem 1.5rem",
      border: "none",
      borderRadius: "30px",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease, transform 0.2s",
    },
    ctaButtonHover: {
      backgroundColor: "#181F25 ",
    },
    testimonials: {
      marginTop: "3rem",
      padding: "2rem",
      backgroundColor: "#eef5ff",
      borderRadius: "10px",
      textAlign: "center",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    testimonial: {
      fontSize: "1.1rem",
      fontStyle: "italic",
      color: "#555",
      marginBottom: "1rem",
    },
    testimonialAuthor: {
      fontWeight: "bold",
      color: "#0B8C7F",
    },
    table: {
      width: "100%",
      marginTop: "3rem",
      borderCollapse: "collapse",
      textAlign: "left",
      backgroundColor: "#F0F8FF",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    tableHeader: {
      backgroundColor: "#0B8C7F",
      color: "#FFFFFF",
      fontWeight: "bold",
    },
    tableRow: {
      borderBottom: "1px solid #B0C4DE",
    },
    tableCell: {
      padding: "1rem",
    },
  };

  const services = [
    {
      title: "Cortes Personalizados",
      description:
        "Transforme seu visual com cortes feitos sob medida para o seu estilo e personalidade.",
    },
    {
      title: "Tratamentos para a Barba",
      description:
        "Cuide da sua barba com nossos serviços de hidratação, alinhamento e finalização premium.",
    },
    {
      title: "Pacotes Especiais",
      description:
        "Conheça nossos pacotes que combinam vários serviços para uma experiência completa.",
    },
    {
      title: "Ambiente Confortável",
      description:
        "Relaxe em um ambiente moderno e acolhedor enquanto é atendido por profissionais.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Melhor barbearia que já frequentei! Atendimento excelente e ambiente muito agradável.",
      author: "João Silva",
    },
    {
      quote:
        "Os serviços são impecáveis e os profissionais são muito atenciosos. Recomendo a todos!",
      author: "Carlos Oliveira",
    },
    {
      quote:
        "A barbearia tem um ambiente acolhedor e os barbeiros realmente entendem do assunto!",
      author: "Pedro Costa",
    },
  ];

  const prices = [
    { service: "Corte Simples", price: "R$ 50,00" },
    { service: "Corte + Barba", price: "R$ 80,00" },
    { service: "Hidratação da Barba", price: "R$ 30,00" },
    { service: "Pacote Completo", price: "R$ 120,00" },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Nossos Serviços</h1>
        <p>Excelência em cuidados masculinos, pensados para você.</p>
      </header>

      <section style={styles.section}>
        {services.map((service, index) => (
          <div
            key={index}
            style={styles.serviceCard}
            onMouseOver={(e) => {
              e.currentTarget.style.transform =
                styles.serviceCardHover.transform;
              e.currentTarget.style.boxShadow =
                styles.serviceCardHover.boxShadow;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = styles.serviceCard.boxShadow;
            }}
          >
            <h2 style={styles.title}>{service.title}</h2>
            <p style={styles.description}>{service.description}</p>
            <button
              style={styles.ctaButton}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor =
                  styles.ctaButtonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor =
                  styles.ctaButton.backgroundColor)
              }
            >
              Saiba Mais
            </button>
          </div>
        ))}
      </section>

      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.tableCell}>Serviço</th>
            <th style={styles.tableCell}>Preço</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((item, index) => (
            <tr key={index} style={styles.tableRow}>
              <td style={styles.tableCell}>{item.service}</td>
              <td style={styles.tableCell}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <section style={styles.testimonials}>
        <h2 style={styles.title}>Depoimentos</h2>
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} style={styles.testimonial}>
            "{testimonial.quote}"
            <footer style={styles.testimonialAuthor}>
              - {testimonial.author}
            </footer>
          </blockquote>
        ))}
      </section>
    </div>
  );
}

export default Services;
