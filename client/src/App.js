import LandingPage from "./components/pages/landing-page/LandingPage";
import LoginPage from "./components/pages/AuthenticationPages/LoginPage";
import PasswordRecoverPage from "./components/pages/AuthenticationPages/PasswordRecoveryPage";
import SignupPage from "./components/pages/AuthenticationPages/SignupPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="password-recovery" element={<PasswordRecoverPage />} />
          {/* <Route path="home" element={<Home />}>
              <Route />
              <Route />
            </Route>
            <Route path="test" element={<Test />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
