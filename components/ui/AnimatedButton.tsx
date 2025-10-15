"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const button = buttonRef.current;

      // Initial state
      gsap.set(button, { scale: 1 });

      // Hover animation
      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      // Click animation
      const handleClick = () => {
        gsap.to(button, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        });
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
      button.addEventListener("click", handleClick);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      className={`transition-colors ${className}`}
    >
      {children}
    </button>
  );
};
