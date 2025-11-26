import { ChevronDown, Zap } from "lucide-react";
import React, { useState } from "react";
import user from "../assets/images/user.jpg";
import { menuItem } from "../constants";

const Sidebar = ({ collapsed, onToggle, currentPage, onPageChange }) => {
  const [expentItems, setExpentItems] = useState(new Set(["analytics"]));

  const toggleExpended = (itemId) => {
    const newExpeended = new Set(expentItems);

    if (newExpeended.has(itemId)) {
      newExpeended.delete(itemId);
    } else {
      newExpeended.add(itemId);
    }

    setExpentItems(newExpeended);
  };

  return (
    <>
      <div
        className={`${
          collapsed ? "w-20" : "w-72"
        } transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
      >
        {/* -------logo----- */}
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>

            {/* ------conditional rendering--- */}
            {!collapsed && (
              <div>
                <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                  Nexus
                </h1>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Admin Panel
                </p>
              </div>
            )}
          </div>
        </div>

        {/* --------Navigation will display dynamic menus------ */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItem.map((item) => (
            <div key={item.id}>
              <button
                className={`${
                  currentPage === item.id || item.active
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50"
                } w-full flex items-center justify-between text-slate-800 dark:text-white p-3 rounded-xl transition-all duration-200`}
                onClick={() => {
                  if (item.submenu) {
                    toggleExpended(item.id);
                  } else {
                    onPageChange(item.id);
                  }
                }}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className={`w-5 h-5`} />

                  {/* -----conditional rendering--- */}
                  {!collapsed && (
                    <div>
                      <span className="font-medium ml-2">{item.label}</span>

                      {item.badge && (
                        <span className="px-2 mx-2 py-1 text-xs bg-red-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}

                      {item.count && (
                        <span className="px-2 mx-2 py-1 text-xs bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                          {item.count}
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {!collapsed && item.submenu && (
                  <ChevronDown className={`w-4 h-4 transition-transform`} />
                )}
              </button>

              {/* ----submenus--- */}
              {!collapsed && item.submenu && expentItems.has(item.id) && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.submenu.map((subitem) => (
                    <button
                      key={subitem.id}
                      className="w-full text-left p-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-lg transition-all"
                    >
                      {subitem.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        {/* --------user profile------ */}
        {!collapsed && (
          <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <img
                src={user}
                alt="user"
                className="w-16 h-16 rounded-full ring-2 ring-blue-500"
              />
              <div className="flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                    Dipjol
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    Administrator
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
