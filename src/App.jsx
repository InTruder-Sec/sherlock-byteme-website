import "./App.css";
import Footer from "./components/global/Footer";
import Home from "./pages/Landing";
import Byteme from "./pages/Byteme";
import Sherlock from "./pages/Sherlock";
import Feedback from "./pages/Feedback";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Background from "./components/global/Background";

function App() {
  return (
    <div className="relative z-0 bg-black w-screen h-screen">
      <BrowserRouter>
        <div className="relative -z-10">
          <Background />
        </div>
        <div className="App static z-20 text-white">
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
    </div>
  );
}

export default App;
