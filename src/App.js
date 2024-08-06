import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import HomePage from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Benq from "./pages/benq";
import ViewSonic from "./pages/viewSonic";
import Acer from "./pages/acer";
import VideoConference from "./pages/vdConfrnc";
import AudioConference from "./pages/audConfrnc";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
  <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/benq" element={<Benq />} />
            <Route path="/viewSonic" element={<ViewSonic />} />
            <Route path="/acer" element={<Acer />} />
            <Route path="/video-conference-system" element={<VideoConference />} />
            <Route path="/audio-conference-system" element={<AudioConference />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
