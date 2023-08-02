import { Route, Routes, Navigate } from "react-router-dom";
import { PrivateLayout } from "./PrivateLayout";

export const AppLayout = () => {
  return (

    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home/*" element={<PrivateLayout />} />
    </Routes>
  );
};
