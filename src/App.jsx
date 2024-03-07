import "./App.css";
import Footer from "./components/global/Footer";
import Home from "./pages/Landing";
import Byteme from "./pages/Byteme";
import Sherlock from "./pages/Sherlock";
import Feedback from "./pages/Feedback";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Background from "./components/global/Background";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Verify from "./components/global/Verify";

function App() {
  return (
    <div className="relative z-0 bg-black w-screen h-screen">
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
