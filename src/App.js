import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import{ init } from 'emailjs-com';
init("user_PbCiI89X40EjyIBgDsF53");

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "f9ab00",
              },
            },
          },
        }}
      />
      <Navbar />
      <AboutMe />
      <Services />
      <Portfolio />
      <Contacts />
      <Footer />
    </>
  );
}
export default App;