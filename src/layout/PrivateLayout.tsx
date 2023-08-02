// import { BaseComponent } from "../components/BaseComponent";
import Navbar from "../components/navbar/Navbar";
// import { PrivateLayoutModals } from "../modals/PrivateLayoutModals";
import { Toaster } from "react-hot-toast";
import EntityTablePage from "../pages/entity-table-page";
import { Navigate, Route, Routes } from "react-router-dom";
import GraphPage from "../pages/graph-page";
export const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <Toaster reverseOrder={true} />

      <Routes>
        <Route path="/" element={<Navigate replace to="/home/company-chart" />} />
        <Route path="/company-chart" element={<EntityTablePage />} />
        <Route path="/graph-page" element={<GraphPage />} />
      </Routes>
    </>
  );
};
