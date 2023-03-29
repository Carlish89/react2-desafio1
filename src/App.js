import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Contacto from "./views/Contacto";
import Home from "./views/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
