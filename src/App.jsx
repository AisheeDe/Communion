import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Events from "./components/Events";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
