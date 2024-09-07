import Navbar from "./components/Navbar.js";
import Particle from "./components/Particle.js";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./components/theme-provider";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import AnimatedRoute from "./Routes/AnimatedRoute.js";
function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Particle />
        <Navbar />
        <AnimatePresence>
          <AnimatedRoute />
        </AnimatePresence>
      </ThemeProvider>
    </Router>
  );
}

export default App;
