import React from "react";
import "./App.css";
import NavigationBar from "./NAVBAR/NavigationBar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <footer>
      <div>
      <p>&copy; 2024 Azeem Rafique. All rights reserved.</p>
        <p>This is my portfolio showcasing my work.</p>
      
      </div>
    </footer> */}
    </>
  );
};

export default App;
