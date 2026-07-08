import AnnouncementBar from "../components/layout/AnnouncementBar";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;