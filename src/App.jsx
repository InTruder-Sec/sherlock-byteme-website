import "./App.css";
import Footer from "./components/global/Footer";
import Home from "./pages/Landing";
import Byteme from "./pages/Byteme";
import Sherlock from "./pages/Sherlock";
import Feedback from "./pages/Feedback";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Background from "./components/global/Background";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Verify from "./components/global/Verify";
import "./App.css";
import OwaspLogo from "./assets/images/logo-main.png";
import { useEffect, useRef } from "react";
import Particles from "./components/global/Particles";

function App() {
  const reffer = useRef(null);
  const animation = useRef(null);
  // For 8 seconds disable scrolling

  useEffect(() => {
    setTimeout(() => {
      reffer.current.style.overflow = "visible";
      animation.current.style.display = "none";
    }, 5000);
  }, []);

  // get current path and if the path is /verify disable none animation ref
  useEffect(() => {
    if (window.location.pathname === "/verify") {
      reffer.current.style.overflow = "visible";
      animation.current.style.display = "none";
    }
  });

  return (
    <div
      className="relative z-0 bg-black w-screen h-screen overflow-hidden"
      ref={reffer}
    >
      <div className="absolute z-50 w-screen h-screen" ref={animation}>
        <Particles />
        <div class="heading text-center z-20">
          <h1 className="heading__main text-6xl font-extrabold -mt-24 sm:text-6xl">
            This ANANTYA 2024
          </h1>
          <img className="heading__logo" src={OwaspLogo} alt="" />
          <h2 className="heading__secondary font-extrabold text-6xl">
            PRESENTS
          </h2>
        </div>
      </div>
      <BrowserRouter>
        <div className="relative -z-10">
          <Background />
        </div>
        <div className="App static z-20 text-white">
          <Navbar />
          <ToastContainer theme="dark" limit={3} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/byteme" element={<Byteme />} />
            <Route path="/sherlock" element={<Sherlock />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
          <div className="fixed bottom-0 w-full z-50"></div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
