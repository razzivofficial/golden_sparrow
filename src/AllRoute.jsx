import { Routes, Route } from "react-router-dom";
import Jwellery from "./pages/jwellery/Jwellery";
import { Homepage } from "./pages/homepage/Homepage";
import Search from "./pages/search/Search";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/jwellery/:type" element={<Jwellery />} />
    </Routes>
  );
}

export default AllRoutes;
