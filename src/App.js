import Navbar from "./components/Navbar";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Footer from "./components/Footer"
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/About" element={<About/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
