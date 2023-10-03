import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal/Modal";
import pages from "./pages";
import loadingIcon from "./components/Modal/icons/loading.svg";
import doneIcon from "./components/Modal/icons/done.svg";
import getLogin from "./javascripts/getLogin";

const App = () => {
  const [page, setPage] = useState("home");
  const [loggedUser, setLoggedUser] = useState(null);
  const [appState, setAppState] = useState("loading");

  useEffect(() => {
    getLogin(setAppState, setLoggedUser);
  }, []);

  if (appState == "loading") {
    return (
      <Modal>
        <div className="loading" id="loadingLogin">
          <p>Loading</p>
          <img src={loadingIcon} alt="Loading icon" className="loadingIcon" />
        </div>
      </Modal>
    );
  }

  if (appState == "success") {
    return (
      <Modal>
        <div className="success">
          <p>Successfully logged out</p>
          <img src={doneIcon} alt="Done icon" id="doneIcon" />
        </div>
      </Modal>
    );
  }

  if (appState == "loaded") {
    return (
      <div>
        <BrowserRouter>
          <Navbar
            page={page}
            setPage={setPage}
            loggedUser={loggedUser}
            setAppState={setAppState}
            setLoggedUser={setLoggedUser}
          />
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
            <Route path="/viewPost/:postId" element={<pages.PostViewer />} />
            <Route path="/viewEvent/:eventId" element={<pages.EventViewer />} />
            <Route path="/viewItem/:itemId" element={<pages.ItemViewer />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
};
export default App;
