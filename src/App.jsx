import Home from "./Home.jsx";
import About from "./about.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
