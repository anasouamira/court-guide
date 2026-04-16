const Card = ({ service, onClick }) => {
  const { title, icon, description } = service;

  return (
    <button
      onClick={onClick}
      aria-label={`Open service: ${title}`}
      className="
        group relative flex flex-col items-center justify-center
        bg-white rounded-3xl
        border border-gray-100
        shadow-sm
        p-6 sm:p-8 w-full text-center
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        cursor-pointer overflow-hidden
      "
    >
      {/* subtle hover glow background */}
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        bg-gradient-to-br from-blue-50/40 to-transparent
        transition-opacity duration-300
      " />

      {/* Icon badge */}
      <div className="
        relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-4
        bg-white border border-blue-100
        shadow-sm group-hover:shadow-md
        flex items-center justify-center
        transition-all duration-300
      ">
        <span
          className="text-3xl sm:text-4xl"
          role="img"
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>

      {/* Title */}
      <span className="
        relative text-sm sm:text-base font-semibold text-gray-900
        leading-snug group-hover:text-blue-700 transition-colors
      ">
        {title}
      </span>

      {/* Description */}
      {description && (
        <span className="
          relative text-xs text-gray-400 mt-1.5 leading-relaxed
          group-hover:text-gray-500 transition-colors
        ">
          {description}
        </span>
      )}

      {/* CTA hint */}
      <span className="
        relative mt-3 text-xs text-blue-400 font-medium
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      ">
        Open service →
      </span>
    </button>
  );
};

export default Card;