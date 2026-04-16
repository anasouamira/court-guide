import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import services from "../data/services.json";

const SectionCard = ({ icon, label, children }) => (
  <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 sm:px-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-lg text-blue-700">
        {icon}
      </div>

      <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
        {label}
      </h2>
    </div>

    <div className="px-4 py-4 sm:px-5">{children}</div>
  </section>
);

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-gray-100 text-4xl">
          🏛️
        </div>
        <h1 className="mb-2 text-xl font-bold text-gray-800">Service not found</h1>
        <p className="mb-8 max-w-xs text-sm text-gray-500">
          The service you are looking for does not exist or has moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-95"
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <Header
        title={service.title}
        subtitle="Follow the steps below to complete your request"
        showIcon={false}
      />

      <main className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => navigate("/")}
            className="rounded-xl bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100 active:scale-95"
          >
            ← Back
          </button>
        </div>

        <div className="grid gap-5">
          <SectionCard icon="📌" label="Steps">
            <ol className="space-y-4">
              {service.steps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="text-sm leading-relaxed text-gray-700">{step}</p>
                </li>
              ))}
            </ol>
          </SectionCard>

          <SectionCard icon="📄" label="Documents">
            <ul className="space-y-3">
              {service.documents.map((doc, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-green-50 text-xs text-green-700">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700">{doc}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          <SectionCard icon="📍" label="Location">
            <div className="grid gap-3">
              {service.location.map((loc, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3"
                >
                  <p className="text-sm font-semibold text-gray-900">{loc.office}</p>
                  <p className="mt-1 text-xs text-gray-600">
                    Floor {loc.floor} · Room {loc.room}
                  </p>
                  {loc.notes && <p className="mt-2 text-xs text-gray-500">{loc.notes}</p>}
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </main>
    </div>
  );
};

export default Details;
