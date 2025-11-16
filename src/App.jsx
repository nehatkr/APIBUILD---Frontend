import "./index.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body />}>
      <Route path="/login" element={<Login />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/dashboard" element={<Pricing />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
