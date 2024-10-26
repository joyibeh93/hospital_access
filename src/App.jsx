import react from "react";
import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";
import Hospital from "./pages/Hospital.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "./App.css";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/result" element={<Result />}/>
        <Route path="/hospital/:hospitalName" element={<Hospital />} />
      </Routes>
    </Router>
  )
}

export default App

