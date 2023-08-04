// import { BaseComponent } from "../components/BaseComponent";
import Navbar from "../components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import EntityTablePage from "../pages/entity-table-page";
import { PrivateLayoutModals } from "../modal/PrivateLayoutModals";
export const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <Toaster reverseOrder={true} />

      <div className="">
        <div className="">
          <EntityTablePage />
        </div>
      </div>
      <PrivateLayoutModals />
    </>
  );
};
