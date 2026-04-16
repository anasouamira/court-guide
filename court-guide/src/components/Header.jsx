const Header = ({
  title = "How can I help you?",
  subtitle = "Choose a service or ask your question below",
  showIcon = true,
}) => {
  return (
    <header
      className="
        bg-gradient-to-r from-blue-700 to-blue-600 text-white
        px-4 sm:px-6 lg:px-8
        py-8 sm:py-10 lg:py-12
      "
    >
      <div className="mx-auto w-full max-w-6xl text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          {/* ICON */}
          {showIcon && (
            <div className="mb-4 sm:mb-5">
              <div
                className="
                  flex h-12 w-12 items-center justify-center rounded-2xl
                  bg-white/15 text-2xl
                  sm:h-14 sm:w-14 sm:text-3xl
                "
              >
                🏛️
              </div>
            </div>
          )}

          {/* TITLE */}
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            {title}
          </h1>

          {/* SUBTITLE */}
          <p className="mt-2 max-w-xl text-sm text-blue-100 sm:text-base">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
