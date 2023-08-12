import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import pages from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/schedule" element={<pages.Schedule />} />
          <Route path="/events" element={<pages.Events />} />
          <Route path="/contact" element={<pages.Contact />} />
          <Route path="/store" element={<pages.Store />} />
          <Route path="/blog" element={<pages.Blog />} />
          <Route path="/about" element={<pages.About />} />
          <Route path="/login" element={<pages.Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
