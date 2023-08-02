import { Route, Routes, Navigate } from "react-router-dom";
// import { AppRoutesUI } from "../config/appRoutes";
// import { NotFoundPage } from "../pages/NotFound/notfound";
import { PrivateLayout } from "./PrivateLayout";
// import UnsubscribePage from "../pages/Subscription/UnsubscribePage";

export const AppLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      {/* <Route path={AppRoutesUI.NotFound.Route} element={<NotFoundPage />} /> */}
      <Route path="/home" element={<PrivateLayout />} />

    </Routes>
  );
};
