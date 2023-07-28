import { Routes, Route } from "react-router-dom";
import Jwellery from "./pages/jwellery/Jwellery";
import Homepage from "./pages/homepage/Homepage";
import Details from "./pages/details/Details";
import SignUp from "./pages/signup/Signup";
import AddToCart from "./pages/addToCart/addCart";
import SignIn from "./pages/signin/Signin";
import Auth from "./Auth";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/jwellery/:type" element={<Jwellery />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        path="/addtocart"
        element={
          <Auth>
            <AddToCart/>
          </Auth>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
