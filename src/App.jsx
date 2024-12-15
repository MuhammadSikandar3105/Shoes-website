import { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div className="bg-black text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
