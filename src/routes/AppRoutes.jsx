import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
