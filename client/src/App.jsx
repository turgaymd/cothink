
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgetPassword";
import SentCode from "./pages/SentCode";


import AuthProvider from "./AuthProvider";
import ApiProvider from "./context/ApiContext";


import MainLayout from "./MainLayout";
import LandingLayout from "./pages/Home_pages/LandingLayout";


import Home from "./pages/Home_pages/Home";
import Services from "./pages/Home_pages/Services";
import About from "./pages/Home_pages/About";
import Contact from "./pages/Home_pages/Contact";

import MainHome from "./pages/MainHome";
import Discussion from "./pages/Discussion";
import Questions from "./pages/Questions";
import Saved from "./pages/Saved";
import Share from "./pages/Share";
import Mentors from "./pages/Mentors";
import Mentor from "./pages/Mentor";
import Rating from "./pages/Rating";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

import Course from "./components/Courses";
import CourseDetail from "./components/CourseDetail";
import CourseContent from "./components/CourseContent";
import Library from "./components/Library";
import Book from "./components/Book";
import BookView from "./components/BookView";
import Article from "./components/Article";
import AddArticle from "./components/AddArticle";
import PrivateRouter from "./PrivateRoute";
import Privacy from "./pages/Conditions";
import ThemeProvider from "./context/ThemeContext";
import { Suspense } from "react";
import Loading from "./utils/Loading";


function App() {
  return (
    <ApiProvider>
      <AuthProvider>
        <ThemeProvider>
        <BrowserRouter>
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route element={<LandingLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

             <Route path="/privacy" element={<Privacy/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/confirm" element={<SentCode />} />

           <Route element={<PrivateRouter/>}>
            <Route element={<MainLayout />}>
              <Route path="/home" element={<MainHome />} />
              <Route path="/questions/:id" element={<Discussion />} />
              <Route path="/questions" element={<Questions />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/share" element={<Share />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/mentors/mentor/:id" element={<Mentor />} />
              <Route path="/library" element={<Library />} />
              <Route path="/library/books/:id" element={<Book />} />
              <Route path="/library/articles/:id" element={<Article />} />
              <Route path="/library/books/:id/read" element={<BookView />} />
              <Route path="/addarticle" element={<AddArticle />} />
              <Route path="/courses" element={<Course />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/courses/:id/content" element={<CourseContent />} />
              <Route path="/rating" element={<Rating />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
            </Route>


            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </ApiProvider>
  );
}

export default App;