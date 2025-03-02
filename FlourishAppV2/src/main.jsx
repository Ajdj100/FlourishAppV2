import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./Login.jsx";
import Tree from "./Tree.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp.jsx";
import Dashboard from "./Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tree" element={<Tree />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
