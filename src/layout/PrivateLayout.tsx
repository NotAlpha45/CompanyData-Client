// import { BaseComponent } from "../components/BaseComponent";
import Navbar from "../components/navbar/Navbar";
// import { PrivateLayoutModals } from "../modals/PrivateLayoutModals";
import { Toaster } from "react-hot-toast";
export const PrivateLayout = () => {
  return (
    <>
      <Toaster reverseOrder={true} />
      <Navbar />
      <div className="container-fluid">
        <div className="row main-wrapper mx-0">
          {/* <BaseComponent /> */}
        </div>
      </div>
      {/* <PrivateLayoutModals /> */}
    </>
  );
};
