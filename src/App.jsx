import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discussion from "./pages/Discussion";
import AuthProvider from "./AuthContext";
import Mentors from "./pages/Mentors";
function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/discussion" element={<Discussion/>} />
        <Route path="/mentors" element={<Mentors/>} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
