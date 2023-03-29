import "./App.css";
import Navbar from "./component/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
