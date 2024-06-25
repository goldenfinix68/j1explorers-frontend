import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Direction } from "./type";
import { HeaderComponent } from "./components/header/header.component";
import HomePage from "./pages/home/home.page";
import TourDetailPage from "./pages/tour.detail/tour.detail";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [direction, setDirection] = useState<Direction>(1); // 1 for forward, -1 for backward

  return (
    <div>
      <HeaderComponent />
      <AnimatePresence mode="wait" custom={direction}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage setDirection={setDirection} />} />
          <Route
            path="/page1"
            element={
              <TourDetailPage
                direction={direction}
                setDirection={setDirection}
              />
            }
          />
          <Route
            path="/page2"
            element={
              <TourDetailPage
                direction={direction}
                setDirection={setDirection}
              />
            }
          />
          {/* Add other routes similarly */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
