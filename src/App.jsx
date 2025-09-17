import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Cards";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import SignUp from "./components/SIgnup";
import Signin from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/" element={<Cards />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
