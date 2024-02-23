import { useState } from "react";
import "./App.css";
import Footer from "./components/global/Footer";
import Home from "./pages/Landing";
import Byteme from "./pages/Byteme";
import Sherlock from "./pages/Sherlock";
import Feedback from "./pages/Feedback";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/global/Navbar";

function App() {
  return (
    <>
      Hello
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/byteme" element={<Byteme />} />
            <Route path="/sherlock" element={<Sherlock />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
