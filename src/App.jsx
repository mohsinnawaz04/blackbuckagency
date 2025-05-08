import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
