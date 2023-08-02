// import { BaseComponent } from "../components/BaseComponent";
import GraphDisplayer from "../components/graph/graph-displayer";
import Navbar from "../components/navbar/Navbar";
// import { PrivateLayoutModals } from "../modals/PrivateLayoutModals";
import { Toaster } from "react-hot-toast";
import EntityTablePage from "../pages/entity-table-page";
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
      {/* <PrivateLayoutModals /> */}
    </>
  );
};
