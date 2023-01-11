import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Accueil from "./components/Accueil.js";
import Contact from "./components/Contact.js";
import Californien from "./components/Californien.js"
import Suedois from "./components/Suedois.js"
import Lahochi from "./components/Lahochi.js"
import Cristal from "./components/Cristal.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <div class="general">
    <Routes>
      
      <Route exact path="/" element={<Accueil />} class="general"/>
      <Route path="/contact" element={<Contact />} class="general"/>
      <Route path="/californien" element={<Californien />} class="general"/>
      <Route path="/suedois" element={<Suedois />} class="general"/>
      <Route path="/lahochi" element={<Lahochi />} class="general"/>
      <Route path="/cristal" element={<Cristal />} class="general"/>
      {/*<Route path="/about" element={<About />} class="general"/>
      <Route path="/artistes" element={<Artistes />} class="general"/>
      <Route path="/benevole" element={<Benevole />} class="general"/>
      <Route path="/contact" element={<Contact />} class="general"/>
      <Route path="/mentions" element={<Mentions />} class="general"/>
      <Route path="/photos" element={<Photos />} class="general"/> */}

    </Routes>
    </div>
  </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
