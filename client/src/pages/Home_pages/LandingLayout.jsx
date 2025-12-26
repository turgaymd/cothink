import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";  
import Footer from "./Footer";

const LandingLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;