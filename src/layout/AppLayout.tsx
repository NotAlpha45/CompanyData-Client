import { Route, Routes, Navigate } from "react-router-dom";
import { PrivateLayout } from "./PrivateLayout";
import { PrivateLayoutModals } from "../modal/PrivateLayoutModals";
import { AppRoutesUI } from "../routes/appRoutes";
// import UnsubscribePage from "../pages/Subscription/UnsubscribePage";

export const AppLayout = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigate replace to={AppRoutesUI.CompanyData.Root()} />} />
      <Route path={`${AppRoutesUI.CompanyData.Root()}*`} element={<PrivateLayout />} />

      {/* <Route path="/modal" element={<PrivateLayoutModals></PrivateLayoutModals>} /> */}

    </Routes>
  );
};
