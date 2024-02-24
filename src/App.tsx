import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import Nav from "./Nav";
import "bootstrap";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
