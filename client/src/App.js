import Home from "./components/pages/home-page/HomePage";
import LandingPage from "./components/pages/landing-page/LandingPage";
import LoginPage from "./components/pages/authentication-pages/LoginPage";
import PasswordRecoverPage from "./components/pages/authentication-pages/PasswordRecoveryPage";
import SignupPage from "./components/pages/authentication-pages/SignupPage";
import Profile from "./components/pages/profile-page/ProfilePage";
import CompletedPage from "./components/pages/completed-page/CompletedPage";
import SettingsPage from "./components/pages/settings-page/SettingsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.scss";

function App() {
  const { session } = useSelector((state) => state.authentication);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="password-recovery" element={<PasswordRecoverPage />} />
          {Object.keys(session).length !== 0 && (
            <>
              <Route path="home" element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="completed" element={<CompletedPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
