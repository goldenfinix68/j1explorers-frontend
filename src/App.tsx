import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Direction } from "./type";
import HomePage from "./pages/home";
import TourDetailPage from "./pages/tour.detail";
import { AnimatePresence } from "framer-motion";
import SchedulePage from "./pages/schedule";
import PageTransition from "./pages/page.transition";
import ProfilePage from "./pages/profile";
import ContactPage from "./pages/contact";
import CityPage from "./pages/city";
import RecommendPage from "./pages/recommend";
import J1EPage from "./pages/j1e";
import TermsPage from "./pages/terms";
import AppDetailPage from "./pages/app.detail";
import DaySchedulePage from "./pages/day.schedule";
import ScheduleDetailPage from "./pages/schedule.detail";
import CityContactPage from "./pages/city.contact";

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
          path="/tour-detail"
          element={
            <PageTransition direction={-1}>
              <TourDetailPage />
            </PageTransition>
          }
        />
        <Route
          path="/profile"
          element={
            <PageTransition direction={-1}>
              <ProfilePage />
            </PageTransition>
          }
        />
        <Route
          path="/schedule"
          element={
            <PageTransition direction={-1}>
              <SchedulePage />
            </PageTransition>
          }
        />
        <Route
          path="/schedule/:day_index"
          element={
            <PageTransition direction={-1}>
              <DaySchedulePage />
            </PageTransition>
          }
        />
        <Route
          path="/schedule/:day_index/:schedule_index"
          element={
            <PageTransition direction={-1}>
              <ScheduleDetailPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition direction={-1}>
              <ContactPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact/:city"
          element={
            <PageTransition direction={-1}>
              <CityPage />
            </PageTransition>
          }
        />
        <Route
          path="/contact/:city/:contact_type"
          element={
            <PageTransition direction={-1}>
              <CityContactPage />
            </PageTransition>
          }
        />
        <Route
          path="/recommend"
          element={
            <PageTransition direction={-1}>
              <RecommendPage />
            </PageTransition>
          }
        />
        <Route
          path="/j1e"
          element={
            <PageTransition direction={-1}>
              <J1EPage />
            </PageTransition>
          }
        />
        <Route
          path="/terms"
          element={
            <PageTransition direction={-1}>
              <TermsPage />
            </PageTransition>
          }
        />
        <Route
          path="/recommend/:apps"
          element={
            <PageTransition direction={-1}>
              <AppDetailPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
export default App;
