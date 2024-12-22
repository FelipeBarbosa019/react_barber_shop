function Scheduling() {
  const styles = {
    page: {
      height: "100%",
      width: "100%",
      margin: 0,
      padding: "3rem 5%",
      backgroundColor: "#F8F0E3",
      color: "#192126",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      color: "#181F25",
      marginBottom: "2rem",
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: "10px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "2rem",
      maxWidth: "600px",
      margin: "0 auto",
    },
    inputField: {
      width: "100%",
      padding: "1rem",
      marginBottom: "1rem",
      border: "1px solid #192126",
      borderRadius: "8px",
      fontSize: "1rem",
      outline: "none",
      transition: "border-color 0.3s ease",
    },
    inputFocus: {
      borderColor: "#0B8C7F",
    },
    label: {
      fontSize: "1rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "#181F25",
    },
    ctaButton: {
      backgroundColor: "#0B8C7F",
      color: "#FFFFFF",
      padding: "1rem 2rem",
      border: "none",
      borderRadius: "30px",
      fontSize: "1.1rem",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s",
    },
    ctaButtonHover: {
      backgroundColor: "#181F25",
    },
    additionalInfo: {
      marginTop: "2rem",
      textAlign: "center",
      color: "#192126",
    },
    additionalTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#0B8C7F",
      marginBottom: "1rem",
    },
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Agendamento de Serviço</h1>
        <p>
          Escolha seu serviço e agende no momento mais conveniente para você.
        </p>
      </header>

      <div style={styles.formContainer}>
        <div style={styles.label}>Nome</div>
        <input
          type="text"
          placeholder="Seu nome completo"
          style={styles.inputField}
        />

        <div style={styles.label}>Data</div>
        <input type="date" style={styles.inputField} />

        <div style={styles.label}>Hora</div>
        <input type="time" style={styles.inputField} />

        <div style={styles.label}>Serviço</div>
        <select style={styles.inputField}>
          <option value="corte">Corte Personalizado</option>
          <option value="barba">Tratamento para Barba</option>
          <option value="pacote">Pacote Completo</option>
        </select>

        <button
          style={styles.ctaButton}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.ctaButtonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.ctaButton.backgroundColor)
          }
        >
          Agendar
        </button>
      </div>

      <div style={styles.additionalInfo}>
        <h2 style={styles.additionalTitle}>Informações Importantes</h2>
        <p>
          • Agendamentos devem ser feitos com pelo menos 24h de antecedência.
        </p>
        <p>
          • Se precisar cancelar, faça-o com 12h de antecedência para evitar
          taxas.
        </p>
      </div>
    </div>
  );
}

export default Scheduling;
