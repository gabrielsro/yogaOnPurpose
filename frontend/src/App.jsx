import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import pages from "./pages";

const App = () => {
  const [page, setPage] = useState("home");
  const [loggedUser, setLoggedUser] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Navbar page={page} setPage={setPage} loggedUser={loggedUser} />
        <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/yogaOnPurpose" element={<pages.Home />} />
          <Route path="/schedule" element={<pages.Schedule />} />
          <Route path="/events" element={<pages.Events />} />
          <Route path="/contact" element={<pages.Contact />} />
          <Route path="/store" element={<pages.Store />} />
          <Route path="/blog" element={<pages.Blog />} />
          <Route path="/about" element={<pages.About />} />
          <Route
            path="/login"
            element={<pages.Login setLoggedUser={setLoggedUser} />}
          />
          <Route path="/signup" element={<pages.Signup />} />
          <Route
            path="/user"
            element={
              <pages.UserDashboard
                loggedUser={loggedUser}
                setLoggedUser={setLoggedUser}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
