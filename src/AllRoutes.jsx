import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/Signin";
import SignUp from "./pages/signup/Signup";
import Homepage from "./pages/homepage/Homepage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default AllRoutes;
