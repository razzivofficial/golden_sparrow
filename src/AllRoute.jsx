import { Routes, Route } from "react-router-dom";
import Jwellery from "./pages/jwellery/Jwellery";
import Homepage from "./pages/homepage/Homepage";
import Details from "./pages/details/Details";
import SignUp from "./pages/signup/Signup";
import AddToCart from "./pages/addToCart/addCart";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/jwellery/:type" element={<Jwellery />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/signin" element={<Signin />} /> */}
      <Route path="/addtocart" element={<AddToCart/>} />
    </Routes>
  );
}

export default AllRoutes;
