import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Card from "../components/Card";
import Chatbot from "../components/Chatbot";

import services from "../data/services.json";

const Home = () => {
  const navigate = useNavigate();
  const [query] = useState(""); // removed Search dependency safely

  // SAFE fallback (prevents crash if services is broken)
  const safeServices = Array.isArray(services) ? services : [];

  const filtered = safeServices.filter((s) => {
    if (!query) return true;

    const q = query.toLowerCase();

    return (
      s?.title?.toLowerCase?.().includes(q) ||
      (Array.isArray(s?.keywords) &&
        s.keywords.some((k) => k.toLowerCase().includes(q)))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-28">

      {/* ── HEADER ── */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
          <Header />
        </div>
      </div>

      {/* ── MAIN ── */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-10">

        {/* TITLE CENTERED */}
        <div className="mb-10 text-center">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Available Services
          </h2>
          <p className="text-gray-700 text-sm mt-1">
            Choose a service to continue
          </p>
        </div>

        {/* GRID */}
        {filtered.length > 0 ? (
          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-5
          ">
            {filtered.map((service) => (
              <div
                key={service.id}
                className="hover:scale-[1.02] transition duration-200"
              >
                <Card
                  service={service}
                  onClick={() => navigate(`/service/${service.id}`)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl mb-4">
              🔎
            </div>
            <p className="text-gray-700 font-medium text-sm">
              No services found
            </p>
          </div>
        )}
      </main>

      {/* ── CHATBOT (FIXED + BIGGER + SAFE) ── */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center px-4">
        <div className="w-full max-w-xl lg:w-[520px]">
          <Chatbot
            services={safeServices}
            onNavigate={(id) => navigate(`/service/${id}`)}
          />
        </div>
      </div>

    </div>
  );
};

export default Home;