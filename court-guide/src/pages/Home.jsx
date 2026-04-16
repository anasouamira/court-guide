import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import Card from "../components/Card";
import Chatbot from "../components/Chatbot";

import services from "../data/services.json";

const Home = () => {
  const navigate = useNavigate();
  const [query] = useState("");

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
    <div className="min-h-screen bg-gray-50 pb-36 lg:pb-32">
      <Header />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mb-8 border-b border-gray-200 pb-5 text-center sm:mb-10 sm:text-left">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Available Services
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Choose one service to view clear next steps.
          </p>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((service) => (
              <div
                key={service.id}
                className="h-full transition-transform duration-200 hover:scale-[1.01]"
              >
                <Card
                  service={service}
                  onClick={() => navigate(`/service/${service.id}`)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-3xl">
              🔎
            </div>
            <p className="text-sm font-medium text-gray-700">No services found</p>
          </div>
        )}
      </main>

      <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center px-4">
        <div className="w-full max-w-2xl lg:max-w-3xl">
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
