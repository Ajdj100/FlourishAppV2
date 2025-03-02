import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "./Login.jsx";
import Tree from "./Tree.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp.jsx";
import Dashboard from "./Dashboard.jsx";
import { TaskProvider } from "./TaskContext"; // Import TaskProvider
import MyTask from "./MyTask.jsx";
import MilestoneBar from "./components/milestoneBar.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TaskProvider> {/* Wrap the Routes with TaskProvider */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Dashboard" element={<Dashboard>

          <MyTask></MyTask>
          <MilestoneBar currentGrowth={50} growthGoal={100} />
        </Dashboard>} />
      </Routes>
    </TaskProvider>
  </BrowserRouter>
);
