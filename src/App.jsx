import Home from "./Home.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
