import { Menu } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* ---left sectiom */}

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Menu className="w-5 h-5" />
            </button>

            <div className="hidden md:block">
                <h1 className="text-2xl font-black text-slate-800 dark:text-white">Dashboard</h1>
                <p className="text-slate-800 dark:text-white">Welcome back, Dipjol! here's what's heppening today</p>
            </div>
          </div>

          {/* --center----- */}
        </div>
      </div>
    </>
  );
};

export default Header;
