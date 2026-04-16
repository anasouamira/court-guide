import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import services from "../data/services.json";

const SectionCard = ({ icon, label, children }) => (
  <div className="
    bg-white/80 backdrop-blur-md
    rounded-3xl border border-gray-100
    shadow-sm hover:shadow-md
    transition duration-200
    overflow-hidden mb-5
  ">
    {/* Header */}
    <div className="
      flex items-center gap-3
      px-5 py-4 border-b border-gray-50
    ">
      <div className="
        w-9 h-9 rounded-xl
        bg-blue-50 text-blue-600
        flex items-center justify-center
        text-lg
      ">
        {icon}
      </div>

      <h2 className="
        text-xs font-semibold text-gray-500 uppercase tracking-wider
      ">
        {label}
      </h2>
    </div>

    {/* Body */}
    <div className="px-5 py-4">
      {children}
    </div>
  </div>
);

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
        <div className="w-20 h-20 bg-gray-100 rounded-3xl flex items-center justify-center text-4xl mb-5">
          🏛️
        </div>
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          Service not found
        </h1>
        <p className="text-gray-400 text-sm mb-8 max-w-xs">
          The service you are looking for does not exist or has moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="
            bg-blue-600 text-white text-sm font-semibold
            px-6 py-3 rounded-2xl
            hover:bg-blue-700 active:scale-95 transition
            shadow-md
          "
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-12">

      {/* Header */}
      <Header
        title={service.title}
        subtitle="Follow the steps below to complete your request"
        showIcon={false}
      />

      {/* Back button */}
      <div className="max-w-5xl mx-auto px-4 pt-5">
        <button
          onClick={() => navigate("/")}
          className="
            text-sm font-medium text-blue-600
            bg-blue-50 hover:bg-blue-100
            px-4 py-2 rounded-xl
            transition active:scale-95
          "
        >
          ← Back
        </button>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">

        {/* Steps */}
        <SectionCard icon="📌" label="Steps">
          <ol className="space-y-4">
            {service.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <div className="
                  w-7 h-7 rounded-xl
                  bg-blue-600 text-white
                  flex items-center justify-center
                  text-xs font-bold
                ">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </SectionCard>

        {/* Documents */}
        <SectionCard icon="📄" label="Documents">
          <ul className="space-y-3">
            {service.documents.map((doc, i) => (
              <li key={i} className="flex gap-3">
                <span className="
                  w-5 h-5 rounded-lg
                  bg-green-50 text-green-600
                  flex items-center justify-center text-xs
                ">
                  ✓
                </span>
                <span className="text-sm text-gray-700">
                  {doc}
                </span>
              </li>
            ))}
          </ul>
        </SectionCard>

        {/* Location */}
        <SectionCard icon="📍" label="Location">
          <div className="space-y-3">
            {service.location.map((loc, i) => (
              <div
                key={i}
                className="
                  bg-gray-50 hover:bg-gray-100
                  border border-gray-100
                  rounded-2xl px-4 py-4
                  transition
                "
              >
                <p className="text-sm font-semibold text-gray-800">
                  {loc.office}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Floor {loc.floor} · Room {loc.room}
                </p>

                {loc.notes && (
                  <p className="text-xs text-gray-400 mt-2">
                    {loc.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </SectionCard>

      </main>
    </div>
  );
};

export default Details;