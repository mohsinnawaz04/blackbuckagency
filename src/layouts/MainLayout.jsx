import Header from "../components/header/Header";
import { Outlet } from "react-router";
import SmoothScroll from "../hooks/SmoothScroll";
import CustomCursor from "../components/common/CustomCursor";
import Modal from "../components/common/Modal";
import { useState } from "react";
import Loading from "../components/common/Loading";

const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // Modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <CustomCursor />
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />{" "}
      {/* Always render modal outside of SmoothScroll */}
      <SmoothScroll>
        <Loading loading={isLoading} />
        <Header toggleModal={toggleModal} />
        <Outlet context={[setIsModalOpen]} />
      </SmoothScroll>
    </>
  );
};

export default MainLayout;
