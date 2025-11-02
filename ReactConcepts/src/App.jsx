import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Counter from "./components/Counter";
import RouterDemo from "./components/RouterDemo";
import StateDemo from "./components/StateDemo";
import PropsDemo from "./components/PropsDemo";
import PortalsDemo from "./components/PortalsDemo";
import PaginationDemo from "./components/PaginationDemo";

import Homepage from "./pages/home";
import Aboutpage from "./pages/about";
import Contactpage from "./pages/contact";

const App = () => {
  const navigationItems = [
    { path: "/counter", label: "Counter", icon: "🔢" },
    { path: "/router", label: "Router", icon: "🔄" },
    { path: "/state", label: "State", icon: "⚡" },
    { path: "/props", label: "Props", icon: "📤" },
    { path: "/portals", label: "Portals", icon: "🚪" },
    { path: "/pagination", label: "Pagination", icon: "📄" },
  ];

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h1 className="text-2xl font-light text-gray-900 tracking-tight">
                    React Concepts
                  </h1>
                  <p className="text-gray-500 text-sm">Professional Demo</p>
                </div>
              </div>

              <nav className="hidden md:flex items-center space-x-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 group"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                ))}
              </nav>

              <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                  <div className="w-full h-0.5 bg-gray-600 rounded"></div>
                  <div className="w-full h-0.5 bg-gray-600 rounded"></div>
                  <div className="w-full h-0.5 bg-gray-600 rounded"></div>
                </div>
              </button>
            </div>
          </div>
        </header>

        <main className="py-12">
          <div className="max-w-4xl mx-auto px-6">
            <Routes>
              <Route path="/counter" element={<Counter />} />
              <Route path="/router" element={<RouterDemo />} />
              <Route path="/state" element={<StateDemo />} />
              <Route path="/props" element={<PropsDemo />} />
              <Route path="/portals" element={<PortalsDemo />} />
              <Route path="/pagination" element={<PaginationDemo />} />
              <Route path="/Home" element={<Homepage />} />
              <Route path="/About" element={<Aboutpage />} />
              <Route path="/Contact" element={<Contactpage />} />
              <Route
                path="/"
                element={
                  <div className="text-center">
                    <div className="mb-16">
                      <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-lg">
                        <svg
                          className="w-12 h-12 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-5xl font-light text-gray-900 mb-6 tracking-tight">
                        React Concepts
                        <span className="block text-blue-600 text-2xl mt-2 font-normal">
                          Professional Demonstration
                        </span>
                      </h2>
                      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Explore essential React concepts through clean,
                        professional examples that showcase modern development
                        practices.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                      {navigationItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-2xl">{item.icon}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {item.label}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            Explore {item.label.toLowerCase()} implementation
                            with professional examples and best practices.
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                }
              />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
