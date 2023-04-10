import "./App.css";
import Navbar from "./component/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home.js";
import Footer from "./component/Footer.js";
import Destination from "./page/Destination.js";
import FoodPage from "./page/FoodPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/Food" element={<FoodPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
