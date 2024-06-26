import React from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Direction } from "./type";
import HomePage from "./pages/home";
import TourDetailPage from "./pages/tour.detail";
import { AnimatePresence } from "framer-motion";
import SchedulePage from "./pages/schedule";
import PageTransition from "./pages/page.transition";

const App: React.FC = () => {
  const location = useLocation();
  const direction: Direction = location.pathname === "/" ? 1 : -1;

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition direction={direction}>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/page1"
          element={
            <PageTransition direction={-1}>
              <TourDetailPage />
            </PageTransition>
          }
        />
        <Route
          path="/page3"
          element={
            <PageTransition direction={-1}>
              <SchedulePage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
//<Route path="*" element={<Navigate to="/" />} />
export default App;
