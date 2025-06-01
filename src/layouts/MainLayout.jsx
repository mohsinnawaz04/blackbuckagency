import Header from "../components/header/Header";
import { Outlet } from "react-router";
import SmoothScroll from "../hooks/SmoothScroll";
import CustomCursor from "../components/common/CustomCursor";
import Modal from "../components/common/modal";
import { useState } from "react";

const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      {/* <CustomCursor /> */}
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />{" "}
      {/* Always render modal outside of SmoothScroll */}
      {/* <SmoothScroll> */}
      {/* <Header toggleModal={toggleModal} /> */}
      <Outlet />
      {/* </SmoothScroll> */}
    </>
  );
};

export default MainLayout;
