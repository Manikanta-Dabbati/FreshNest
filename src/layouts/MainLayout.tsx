import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen max-w-7xl mx-auto px-6 py-8">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;