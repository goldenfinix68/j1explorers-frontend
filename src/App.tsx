import React, { useState } from "react";
import "./App.css";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import { TourDetailPage, TourDetailEditPage } from "./pages/tour.detail";
import { AnimatePresence } from "framer-motion";
import SchedulePage from "./pages/schedule";
import { PageWrapper } from "./containers/page.wrapper";
import { ProfilePage, ProfileEditPage } from "./pages/profile";
import ContactPage from "./pages/contact";
import CityPage from "./pages/city";
import RecommendPage from "./pages/recommend";
import J1EPage from "./pages/j1e";
import TermsPage from "./pages/terms";
import AppDetailPage from "./pages/app.detail";
import DaySchedulePage from "./pages/day.schedule";
import ScheduleDetailPage from "./pages/schedule.detail";
import CityContactPage from "./pages/city.contact";
import FAQPage from "./pages/faq";
import FAQCategoryPage from "./pages/faq.category";
import FAQIncludedPage from "./pages/faq.included";
import FAQAnswerPage from "./pages/faq.answer";
import { directionSelector } from "./store/direction/direction.selector";
import { useSelector } from "react-redux";
import LoginPage from "./pages/login";
import FAQMainPage from "./pages/faq.main";
import { SettingsPage } from "./pages/setting.page";
import LogoutPage from "./pages/logout";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const App: React.FC = () => {
  const location = useLocation();
  const direction = useSelector(directionSelector);
  console.log(direction);
  return (
    <div className="w-full h-full">
      <TransitionGroup className="container">
        <CSSTransition
          key={location.key}
          classNames={direction ? "right" : "left"}
          timeout={500}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <PageWrapper direction={direction}>
                  <HomePage />
                </PageWrapper>
              }
            />
            <Route
              path="/tour-detail"
              element={
                <PageWrapper direction={direction}>
                  <TourDetailPage />
                </PageWrapper>
              }
            />
            <Route
              path="/tour-detail/edit"
              element={
                <PageWrapper direction={direction}>
                  <TourDetailEditPage />
                </PageWrapper>
              }
            />
            <Route
              path="/profile"
              element={
                <PageWrapper direction={direction}>
                  <ProfilePage />
                </PageWrapper>
              }
            />
            <Route
              path="/profile/edit"
              element={
                <PageWrapper direction={direction}>
                  <ProfileEditPage />
                </PageWrapper>
              }
            />
            <Route
              path="/schedule"
              element={
                <PageWrapper direction={direction}>
                  <SchedulePage />
                </PageWrapper>
              }
            />
            <Route
              path="/schedule/:day_index"
              element={
                <PageWrapper direction={direction}>
                  <DaySchedulePage />
                </PageWrapper>
              }
            />
            <Route
              path="/schedule/:day_index/:schedule_index"
              element={
                <PageWrapper direction={direction}>
                  <ScheduleDetailPage />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper direction={direction}>
                  <ContactPage />
                </PageWrapper>
              }
            />
            <Route
              path="/contact/:city"
              element={
                <PageWrapper direction={direction}>
                  <CityPage />
                </PageWrapper>
              }
            />
            <Route
              path="/contact/:city/:contact_type"
              element={
                <PageWrapper direction={direction}>
                  <CityContactPage />
                </PageWrapper>
              }
            />
            <Route
              path="/recommend"
              element={
                <PageWrapper direction={direction}>
                  <RecommendPage />
                </PageWrapper>
              }
            />
            <Route
              path="/j1e"
              element={
                <PageWrapper direction={direction}>
                  <J1EPage />
                </PageWrapper>
              }
            />
            <Route
              path="/faq"
              element={
                <PageWrapper direction={direction}>
                  <FAQPage />
                </PageWrapper>
              }
            />
            <Route
              path="/faq/main"
              element={
                <PageWrapper direction={direction}>
                  <FAQMainPage />
                </PageWrapper>
              }
            />
            <Route
              path="/faq/main/0"
              element={
                <PageWrapper direction={direction}>
                  <FAQIncludedPage />
                </PageWrapper>
              }
            />
            <Route
              path="/faq/:category"
              element={
                <PageWrapper direction={direction}>
                  <FAQCategoryPage />
                </PageWrapper>
              }
            />
            <Route
              path="/faq/:category/:question"
              element={
                <PageWrapper direction={direction}>
                  <FAQAnswerPage />
                </PageWrapper>
              }
            />
            <Route
              path="/terms"
              element={
                <PageWrapper direction={direction}>
                  <TermsPage />
                </PageWrapper>
              }
            />
            <Route
              path="/recommend/:apps"
              element={
                <PageWrapper direction={direction}>
                  <AppDetailPage />
                </PageWrapper>
              }
            />
            <Route
              path="/setting"
              element={
                <PageWrapper direction={direction}>
                  <SettingsPage />
                </PageWrapper>
              }
            />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};
export default App;
