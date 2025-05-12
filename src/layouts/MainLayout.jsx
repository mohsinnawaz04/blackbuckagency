import Header from "../components/common/Header";
import { Outlet } from "react-router";
import SmoothScroll from "../hooks/SmoothScroll";

const MainLayout = () => {
  return (
    <>
      <SmoothScroll>
        {/* <Header /> */}
        <Outlet />
      </SmoothScroll>
    </>
  );
};

export default MainLayout;
