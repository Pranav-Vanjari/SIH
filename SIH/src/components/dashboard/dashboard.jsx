import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "../header";
import Sidebar from "../sidebar";
import FinalWordCloud from "./wordcloud/wc";
import PieChart from "./piechart/piechart";
import CountingText from "./countercard";
import Comment from "../comment";
import FinalChart from "./chart/finalChart";
import "./dashboard.css";
import FinalSummary from "./summary/mainSummary";
import Solution from "./solution/solution";

// Pages
const DashboardPage = () => (
  <div className="page-wrapper">
    <div className="counters-div">
      <CountingText number={500} text={"Total Comments"} />
      <CountingText number={110} text={"Positive"} color="green" />
      <CountingText number={310} text={"Negative"} color="red"/>
      <CountingText number={80} text={"Neutral"} color="gray" />
    </div>

    <div className="dashboard-widgets">
      <div className="widget piechart-widget">
        <PieChart />
      </div>
      <div className="widget chart-widget">
        <FinalChart />
      </div>
      <div className="widget wordcloud-widget">
        <FinalWordCloud />
      </div>
      <div className="widget wordcloud-widget">
        <FinalSummary />
      </div>
    </div>
  </div>
);

const CommentsPage = () => (
  <div className="page-wrapper">
    <Comment />
  </div>
);

const ReportsPage = () => (
  <div className="page-wrapper">
    <h2>Reports</h2>
    <p>Generate and download detailed reports of sentiment analysis.</p>
  </div>
);

const SolutionsPage = () => (
  <div className="page-wrapper">
      <Solution></Solution>
  </div>
);

const SettingsPage = () => (
  <div className="page-wrapper">
    <h2>Settings</h2>
    <p>Configure dashboard preferences and manage user roles.</p>
  </div>
);

// Header Wrapper to set text dynamically
const HeaderWrapper = ({ selectedAmendment, setSelectedAmendment }) => {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/comments": "Comments",
    "/reports": "Reports",
    "/solutions": "Solutions",
    "/settings": "Settings",
  };

  // Default text if no match
  const text = pageTitles[location.pathname] || "Dashboard";

  return (
    <Header
      text={text}
      selectedAmendment={selectedAmendment}
      setSelectedAmendment={setSelectedAmendment}
    />
  );
};

// Main Router Component
const DashboardRouter = () => {
  const [selectedAmendment, setSelectedAmendment] = useState(
    "Draft Amendment #001"
  );

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <HeaderWrapper
            selectedAmendment={selectedAmendment}
            setSelectedAmendment={setSelectedAmendment}
          />
          <main className="dashboard">
            <Routes>
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/comments" element={<CommentsPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default DashboardRouter;
