import Certificates from "@/pages/Certificates";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Project from "@/pages/Project";
import { Routes, Route, useLocation } from "react-router-dom";

function AnimatedRoute() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project" element={<Project/>} />
      <Route path="/archive/certificates" element={<Certificates/>} />
    </Routes>
  );
}

export default AnimatedRoute;
