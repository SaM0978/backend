import { useState } from "react";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
