const Header = ({
  title = "How can I help you?",
  subtitle = "Choose a service or ask your question below",
  showIcon = true,
}) => {
  return (
    <header className="
      bg-gradient-to-r from-blue-600 to-blue-500
      text-white
      px-6
      py-12
      min-h-[220px]
      flex flex-col items-center justify-center
      text-center
    ">

      <div className="max-w-3xl w-full flex flex-col items-center">

        {/* ICON */}
        {showIcon && (
          <div className="mb-4">
            <div className="
              w-14 h-14
              bg-white/15
              rounded-2xl
              flex items-center justify-center
              text-3xl
            ">
              🏛️
            </div>
          </div>
        )}

        {/* TITLE */}
        <h1 className="
          text-2xl sm:text-3xl font-bold
          tracking-tight
        ">
          {title}
        </h1>

        {/* SUBTITLE */}
        <p className="
          mt-2 text-blue-100
          text-sm sm:text-base
          max-w-md
        ">
          {subtitle}
        </p>

      </div>
    </header>
  );
};

export default Header;