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
import Articles from "./components/Articles";
import AddArticle from "./components/AddArticle";
import SentCode from "./pages/SentCode";
import Home from "./pages/Home";
import Mentor from "./pages/Mentor";
import Settings from "./pages/Settings";
import NotFound from "./components/NotFound";
import Profiles from "./pages/Profiles";
import Book from "./components/Book";
import Questions from "./pages/Questions";

function App() {
  return (
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/confirm" element={<SentCode/>} />
        <Route element={<MainLayout/>}>
        <Route path="/home" element={<Home/>} />
        <Route path="/discussion" element={<Discussion/>} />
        <Route path="/questions" element={<Questions/>} />
        <Route path="/mentors" element={<Mentors/>} />
        <Route path="/mentor" element={<Mentor/>} />
        <Route path="/library" element={<Library/>} />
        <Route path="/libraryy" element={<Book/>} />
        <Route path="/courses" element={<Course/>} />
        <Route path="/rating" element={<Rating/>} />
        <Route path="/profile" element={<Profiles/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/saved" element={<NotFound/>} />
        <Route path="/*" element={<NotFound/>} />
        <Route path="/addarticle" element={<AddArticle/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}

export default App;
