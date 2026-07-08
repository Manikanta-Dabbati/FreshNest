import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Vegetables from "../pages/Vegetables";
import NonVeg from "../pages/NonVeg";
import Dairy from "../pages/Dairy";
import Drinks from "../pages/Drinks";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import About from "../pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/dairy" element={<Dairy />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />

      </Route>
    </Routes>
  );
}

export default AppRoutes;