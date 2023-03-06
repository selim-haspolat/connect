import { useState } from "react";
import Entrance from "./components/Entrance";
import Home from "./Pages/Home";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./Pages/Error";
import Users from "./Pages/Users";
import Profile from "./Pages/Profile";
import Posts from "./Pages/Posts";
import Settings from "./Pages/Settings";
import ProfileInfo from "./Pages/ProfileInfo";

function App() {
  const [login, setLogin] = useState(localStorage.getItem("userData"));
  const ApiKey = process.env.REACT_APP_API_KEY;

  return (
    <div>
      {login ? (
        <>
          <Routes>
            <Route
              path="/"
              element={
                <div className="min-h-screen bg-slate-800 flex flex-col">
                  <Navbar />
                  <Outlet />
                  <Footer />
                </div>
              }
            >
              <Route index element={<Home ApiKey={ApiKey} />} />
              <Route path="/home" element={<Home />} />
              <Route path="/users" element={<Users ApiKey={ApiKey} />} />
              <Route path="/profile" element={<Profile ApiKey={ApiKey} />}>
                <Route path="/profile/" element={<ProfileInfo/>} />
                <Route path="/profile/posts" element={<Posts ApiKey={ApiKey}/>} />
                <Route path="/profile/settings" element={<Settings />} />
              </Route>
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      ) : (
        <Entrance ApiKey={ApiKey} setLogin={setLogin} />
      )}
    </div>
  );
}

export default App;
