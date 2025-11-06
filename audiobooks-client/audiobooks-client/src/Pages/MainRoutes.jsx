import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import TextToAudio from "../components/TextToAudio";
import Books from "./Books";
function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/texttoaudio" element={<TextToAudio />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}
export default MainRoutes;
