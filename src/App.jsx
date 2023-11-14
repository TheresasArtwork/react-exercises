import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import About from "./pages/About";
import { AppNavigation } from "./Navigation/Navigation";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <AppNavigation />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Exercises" element={<Exercises />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
