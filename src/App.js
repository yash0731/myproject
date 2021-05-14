import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";
function App() {
  return (
    <div className="App">
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 60,
              density: { enable: true, value_area: 900 },
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#005A9C",
              },
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
