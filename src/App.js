import React from "react";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import About from "./components/About/About";
import Team from "./components/team/Team";
import CTA from "./components/CTA/CTA";
import Contact from "./components/Contact/Contact";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Team />
        <CTA />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
