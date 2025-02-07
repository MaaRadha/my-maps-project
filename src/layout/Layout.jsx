import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div className="text-gray-200">
      <Navbar />
      <main className="container mx-auto max-w-7xl p-4 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
