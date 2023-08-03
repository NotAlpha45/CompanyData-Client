import { Route, Routes, Navigate } from "react-router-dom";
// import { AppRoutesUI } from "../config/appRoutes";
// import { NotFoundPage } from "../pages/NotFound/notfound";
import { PrivateLayout } from "./PrivateLayout";
import ImportEntities from "../modal/ImportEntities/ImportEntities";
// import UnsubscribePage from "../pages/Subscription/UnsubscribePage";

export const AppLayout = () => {
  return (

    <Routes>

      <Route path="/" element={<Navigate replace to="/company-table" />} />
      {/* <Route path={AppRoutesUI.NotFound.Route} element={<NotFoundPage />} /> */}
      <Route path="/company-table" element={<PrivateLayout />} />
      <Route path="/modal" element={<ImportEntities></ImportEntities>} />

    </Routes>
  );
};
