//suneditor
import React from "react";
import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Add from "./components/Add";
import Home from "./components/Home";
import EditPost from "./components/EditPost";

export const ToLink = "http://127.0.0.1:4000";
function Routing() {
  const location = useLocation();
  console.log(location);

  return (
    <div style={{ width: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<EditPost />} />
      </Routes>
    </div>
  );
}
function App() {
  return (
    <div>
      <HashRouter>
        <Routing />
      </HashRouter>
    </div>
  );
}

export default App;
