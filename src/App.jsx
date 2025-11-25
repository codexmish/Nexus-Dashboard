import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const App = () => {
  const [sidebarCollaps, setSidebarCollaps] = useState(false);
  const [currentPage, setCurrenPage] = useState("dashboard");

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
        <div className="flex h-screen overflow-hidden">
          <Sidebar
            collapsed={sidebarCollaps}
            onToggle={() => setSidebarCollaps(!sidebarCollaps)}
            currentPage={currentPage}
            onPageChange={setCurrenPage}
          />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
