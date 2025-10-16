import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="footer py-6 md:py-8 px-2 md:px-4 lg:px-10 xl:px-20"
      role="contentinfo"
    >
      <div className="flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6  border-2 border-[#4285f4] shadow-2xl rounded-[40px] md:rounded-[60px] px-8 py-6 md:px-12 md:py-8 w-full max-w-6xl">
          {/* Left side - Brand */}
          <div className="flex flex-col  items-start">
            <div className="flex items-center gap-3 mb-2">
              <div className="size-8 md:size-10 text-[#FE6C11]">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
                </svg>
              </div>
              <h3 className="text-[#FE6C11] text-xl md:text-2xl font-bold font-display">
                Minidev
              </h3>
            </div>
            <p className="text-[#c084fc] text-sm md:text-base font-display">
              Vibecode Farcaster Miniapps ✨
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <a
              className="text-[#c084fc] hover:text-black transition-colors text-sm md:text-base font-display"
              href="https://x.com/minidev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter/X"
            >
              Twitter/X
            </a>
            <a
              className="flex items-center gap-2 text-[#c084fc] hover:text-black transition-colors text-sm md:text-base font-display"
              href="https://warpcast.com/minidev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Try on Farcaster"
            >
              Try on Farcaster
              <svg
                className="w-3 h-3"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
