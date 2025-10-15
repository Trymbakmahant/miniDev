import React from "react";
import Link from "next/link";
import { AnimatedButton } from "../ui/AnimatedButton";

export const Navbar: React.FC = () => {
  return (
    <header className="navbar fixed top-0 left-0 right-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 bg-background-light/80 px-4 py-3 backdrop-blur-sm md:px-10 lg:px-20 xl:px-40">
      <div className="flex items-center gap-4 text-text-primary">
        <div className="size-8 text-primary">
          <svg
            fill="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"></path>
          </svg>
        </div>
        <Link
          href="/"
          className="text-text-primary text-lg font-bold leading-tight tracking-[-0.015em] font-display focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:visible rounded"
          aria-label="miniDev - Go to homepage"
        >
          miniDev
        </Link>
      </div>
      <AnimatedButton className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary/90 text-white text-sm font-bold leading-normal tracking-[0.015em] font-display transition-colors">
        <span className="truncate">Login</span>
      </AnimatedButton>
    </header>
  );
};
