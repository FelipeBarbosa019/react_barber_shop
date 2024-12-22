import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Scheduling from "./components/pages/Scheduling";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./layout/Container";
import Navbar from "./layout/Navbar";
import Services from "./components/pages/Services";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Container customClass="min-heigth">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/Scheduling" element={<Scheduling />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
