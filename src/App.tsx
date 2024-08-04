import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { HomePage } from "./pages/home";
import { TourDetailPage, TourDetailEditPage } from "./pages/tour.detail";
import { AnimatePresence } from "framer-motion";
import { SchedulePage } from "./pages/schedule";
import { PageWrapper } from "./containers/page.wrapper";
import { ProfilePage, ProfileEditPage } from "./pages/profile";
import { ContactPage } from "./pages/contact";
import { CityPage } from "./pages/city";
import { RecommendPage } from "./pages/recommend";
import { J1EPage } from "./pages/j1e";
import { TermsPage } from "./pages/terms";
import { AppDetailPage } from "./pages/app.detail";
import { DaySchedulePage } from "./pages/day.schedule";
import { ScheduleDetailPage } from "./pages/schedule.detail";
import { CityContactPage } from "./pages/city.contact";
import { FAQPage } from "./pages/faq";
import { FAQCategoryPage } from "./pages/faq.category";
import { FAQIncludedPage } from "./pages/faq.included";
import { FAQAnswerPage } from "./pages/faq.answer";
import { LoginPage } from "./pages/login";
import { FAQMainPage } from "./pages/faq.main";
import { SettingsPage } from "./pages/setting.page";
import { LogoutPage } from "./pages/logout";
import { J1ExplorersContactPage } from "./pages/j1explorers.contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GuestGuard } from "./auth/guard";

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/login"
            element={
              <GuestGuard>
                <LoginPage />
              </GuestGuard>
            }
          />
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path="/tour-detail"
            element={
              <PageWrapper>
                <TourDetailPage />
              </PageWrapper>
            }
          />
          <Route
            path="/tour-detail/edit"
            element={
              <PageWrapper>
                <TourDetailEditPage />
              </PageWrapper>
            }
          />
          <Route
            path="/profile"
            element={
              <PageWrapper>
                <ProfilePage />
              </PageWrapper>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <PageWrapper>
                <ProfileEditPage />
              </PageWrapper>
            }
          />
          <Route
            path="/schedule"
            element={
              <PageWrapper>
                <SchedulePage />
              </PageWrapper>
            }
          />
          <Route
            path="/schedule/:day_index"
            element={
              <PageWrapper>
                <DaySchedulePage />
              </PageWrapper>
            }
          />
          <Route
            path="/schedule/:day_index/:schedule_index"
            element={
              <PageWrapper>
                <ScheduleDetailPage />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/:city"
            element={
              <PageWrapper>
                <CityPage />
              </PageWrapper>
            }
          />
          <Route
            path="/contact/:city/:contact_type"
            element={
              <PageWrapper>
                <CityContactPage />
              </PageWrapper>
            }
          />
          <Route
            path="/recommend"
            element={
              <PageWrapper>
                <RecommendPage />
              </PageWrapper>
            }
          />
          <Route
            path="/j1explorers-contact"
            element={
              <PageWrapper>
                <J1ExplorersContactPage />
              </PageWrapper>
            }
          />
          <Route
            path="/j1e"
            element={
              <PageWrapper>
                <J1EPage />
              </PageWrapper>
            }
          />
          <Route
            path="/faq"
            element={
              <PageWrapper>
                <FAQPage />
              </PageWrapper>
            }
          />
          <Route
            path="/faq/main"
            element={
              <PageWrapper>
                <FAQMainPage />
              </PageWrapper>
            }
          />
          <Route
            path="/faq/main/0"
            element={
              <PageWrapper>
                <FAQIncludedPage />
              </PageWrapper>
            }
          />
          <Route
            path="/faq/:category"
            element={
              <PageWrapper>
                <FAQCategoryPage />
              </PageWrapper>
            }
          />
          <Route
            path="/faq/:category/:question"
            element={
              <PageWrapper>
                <FAQAnswerPage />
              </PageWrapper>
            }
          />
          <Route
            path="/terms"
            element={
              <PageWrapper>
                <TermsPage />
              </PageWrapper>
            }
          />
          <Route
            path="/recommend/:apps"
            element={
              <PageWrapper>
                <AppDetailPage />
              </PageWrapper>
            }
          />
          <Route
            path="/setting"
            element={
              <PageWrapper>
                <SettingsPage />
              </PageWrapper>
            }
          />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </AnimatePresence>
      <ToastContainer />
    </div>
  );
};
export default App;
