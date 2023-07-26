import { Routes, Route } from "react-router-dom";
import Jwellery from "./pages/jwellery/Jwellery";
import Homepage from "./pages/homepage/Homepage";
import Details from "./pages/details/Details";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/jwellery/:type" element={<Jwellery />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default AllRoutes;
