// import { BaseComponent } from "../components/BaseComponent";
import Navbar from "../components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import EntityTablePage from "../pages/entity-table-page";
import { Navigate, Route, Routes } from "react-router-dom";
import GraphPage from "../pages/graph-page";
import { PrivateLayoutModals } from "../modal/PrivateLayoutModals";
import { AppRoutesUI } from "../routes/appRoutes";
export const PrivateLayout = () => {
  return (
    <>
      <Navbar />
      <Toaster position="top-right" reverseOrder={true} />

      <Routes>
        <Route
          path={AppRoutesUI.Root}
          element={
            <Navigate
              replace
              to={AppRoutesUI.CompanyData.CompanyDataChart.Root()}
            />
          }
        />
        <Route
          path={AppRoutesUI.CompanyData.CompanyDataChart.Root()}
          element={<EntityTablePage />}
        />
        <Route
          path={AppRoutesUI.CompanyData.CompanyDataGraph.Root()}
          element={<GraphPage />}
        />
      </Routes>
      <div className=""></div>
      <PrivateLayoutModals />
    </>
  );
};
