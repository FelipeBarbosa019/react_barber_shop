import cortesImg from "../../img/cortes.webp";
import barbaImg from "../../img/barba.webp";
import ambienteImg from "../../img/ambiente.jpg";

function Home() {
  const styles = {
    page: {
      height: "100%",
      width: "100%",
      margin: 0,
      padding: 0,
      backgroundColor: "#F8F0E3",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "3rem",
    },
    hero: {
      height: "70vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background: `linear-gradient(135deg, #181F25, #0B8C7F)`,
      color: "#FFFFFF",
      padding: "2rem",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    subtitle: {
      fontSize: "1.2rem",
      maxWidth: "60%",
      marginBottom: "2rem",
      lineHeight: "1.5",
    },
    ctaButton: {
      backgroundColor: "#0B8C7F",
      color: "#FFFFFF",
      padding: "0.8rem 2rem",
      border: "none",
      borderRadius: "30px",
      fontSize: "1rem",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      transition: "background-color 0.3s ease, transform 0.2s",
    },
    ctaButtonHover: {
      backgroundColor: "#0B8C7F",
    },
    sections: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "3rem",
      padding: "2rem 5%",
      backgroundColor: "#F8F0E3",
    },
    section: {
      width: "100%",
      maxWidth: "1200px",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      alignItems: "center",
      gap: "2rem",
    },
    textContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "left",
    },
    imageContent: {
      display: "flex",
      justifyContent: "center",
      width: "500px",
      height: "250px",
    },
    image: {
      width: "100%",
      maxWidth: "350px",
      borderRadius: "10px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#181F25",
    },
    description: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#192126",
    },
  };

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Estilo e Tradição na Barbearia</h1>
        <p style={styles.subtitle}>
          Experimente cortes modernos e cuidados personalizados para o homem que
          valoriza qualidade e estilo.
        </p>
        <button
          style={styles.ctaButton}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.ctaButtonHover.backgroundColor)
          }
          onMouseOut={(e) => (e.target.style.backgroundColor = "#181F25")}
        >
          Agendar Agora
        </button>
      </section>

      <div style={styles.sections}>
        <div style={styles.section}>
          <div style={styles.textContent}>
            <h2 style={styles.heading}>Cortes Personalizados</h2>
            <p style={styles.description}>
              Nossos barbeiros são especialistas em criar cortes que combinam
              com o seu estilo. Venha conhecer a diferença de um atendimento
              exclusivo.
            </p>
          </div>
          <div style={styles.imageContent}>
            <img
              src={cortesImg}
              alt="Cortes personalizados"
              style={styles.image}
            />
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.imageContent}>
            <img
              src={barbaImg}
              alt="Cuidados com a barba"
              style={styles.image}
            />
          </div>
          <div style={styles.textContent}>
            <h2 style={styles.heading}>Cuidados com a Barba</h2>
            <p style={styles.description}>
              Tratamentos especiais para a sua barba, desde o alinhamento até
              hidratação completa. Deixe sua aparência impecável.
            </p>
          </div>
        </div>

        <div style={styles.section}>
          <div style={styles.textContent}>
            <h2 style={styles.heading}>Ambiente Confortável</h2>
            <p style={styles.description}>
              Oferecemos um espaço moderno e aconchegante para que você se sinta
              em casa enquanto aproveita nossos serviços.
            </p>
          </div>
          <div style={styles.imageContent}>
            <img
              src={ambienteImg}
              alt="Ambiente confortável"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
