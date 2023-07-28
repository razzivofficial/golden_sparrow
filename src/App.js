import "./App.css";
import AllRoutes from "./AllRoute";
import Details from "./pages/details/Details";
import Invoice from "./pages/invoice/Invoice";
import SignUp from "./pages/signup/Signup";
import AddToCart from "./pages/addToCart/addCart";
import Homepage from "./pages/homepage/Homepage";
import Chatbot from "./components/chatbot";

function App() {
  return (
    <>
      {/* <AllRoutes /> */}
      <Homepage />
      <Chatbot />
      {/* <Details /> */}
      {/* <Invoice /> */}
      {/* <SignUp /> */}
      {/* <AddToCart /> */}
    </>
  );
}

export default App;
