import Header from "../components/header/Header";
import { Outlet } from "react-router";
import SmoothScroll from "../hooks/SmoothScroll";
import CustomCursor from "../components/common/CustomCursor";
import Modal from "../components/common/Modal";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import Loading from "../components/common/Loading";

const MainLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Analytics />
      <CustomCursor />
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal} />{" "}
      {/* Always render modal outside of SmoothScroll */}
      <SmoothScroll>
        <Loading />
        <Header toggleModal={toggleModal} />
        <Outlet context={[setIsModalOpen]} />
      </SmoothScroll>
    </>
  );
};

export default MainLayout;
