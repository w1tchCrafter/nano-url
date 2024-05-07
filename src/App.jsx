import ContactPage from "./Contact.jsx";
import Docs from "./Docs.jsx";
import Home from "./Home.jsx";
import About from "./about.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/docs" Component={Docs}></Route>
        <Route path="/contact" Component={ContactPage}></Route>
      </Routes>
    </BrowserRouter>
  );
}
