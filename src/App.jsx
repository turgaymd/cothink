import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Discussion from "./pages/Discussion";
import AuthProvider from "./AuthContext";
import Mentors from "./pages/Mentors";
import Rating from "./pages/Rating";
import Course from "./components/Course";
import Library from "./components/Library";
import MainLayout from "./MainLayout";
import Profile from "./pages/Profile";
import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";

function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route element={<MainLayout/>}>
        <Route path="/discussion" element={<Discussion/>} />
        <Route path="/mentors" element={<Mentors/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/courses" element={<Course/>} />
        <Route path="/rating" element={<Rating/>} />
        <Route path="/settings" element={<Profile/>} />
         <Route path="/saved" element={<Articles/>} />
        <Route path="/addarticle" element={<AddArticle/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
