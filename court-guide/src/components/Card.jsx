const Card = ({ service, onClick }) => {
  const { title, icon, description } = service;

  return (
    <button
      onClick={onClick}
      aria-label={`Open service: ${title}`}
      className="
        group relative flex h-full w-full flex-col items-start
        rounded-2xl border border-gray-200 bg-white p-5 text-left shadow-sm
        transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      "
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-2xl sm:h-14 sm:w-14 sm:text-3xl">
        <span role="img" aria-hidden="true">
          {icon}
        </span>
      </div>

      <span className="text-base font-semibold leading-snug text-gray-900 transition-colors group-hover:text-blue-700">
        {title}
      </span>

      {description && (
        <span className="mt-2 text-sm leading-relaxed text-gray-600">{description}</span>
      )}

      <span className="mt-4 text-xs font-semibold text-blue-600">Open service →</span>
    </button>
  );
};

export default Card;
