import React from "react";
import { Button } from "./Button";

interface PromptBarProps {
  placeholder?: string;
  onGenerate?: (prompt: string) => void;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  isLoading?: boolean;
  isAuthenticated?: boolean;
  className?: string;
}

export const PromptBar: React.FC<PromptBarProps> = ({
  placeholder = "Describe your miniapp idea...",
  onGenerate,
  value = "",
  onChange,
  error,
  isLoading = false,
  isAuthenticated = false,
  className = "",
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() && onGenerate) {
      onGenerate(value.trim());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const inputId = "prompt-input";
  const errorId = error ? "prompt-error" : undefined;

  return (
    <div className={`w-full ${className}`}>
      <form onSubmit={handleSubmit} role="search" aria-label="Generate miniapp">
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor={inputId} className="sr-only">
              Describe your miniapp idea
            </label>
            <input
              id={inputId}
              type="text"
              value={value}
              onChange={handleInputChange}
              placeholder={placeholder}
              className={`w-full px-6 py-4 text-lg bg-white/10 border border-white/20 rounded-2xl focus:ring-2 focus:ring-[#FE6C11] focus:border-[#FE6C11] transition-colors focus:outline-none focus:visible text-white placeholder-white/60 ${
                error ? "border-red-500" : ""
              }`}
              aria-invalid={error ? "true" : "false"}
              aria-describedby={errorId}
              aria-required="true"
            />
            {error && (
              <p
                id={errorId}
                className="mt-2 text-sm text-red-400"
                role="alert"
              >
                {error}
              </p>
            )}
          </div>
          <Button
            type="submit"
            size="lg"
            className="px-8 rounded-2xl bg-[#FE6C11] hover:bg-[#E55A1F] text-white font-semibold"
            disabled={isLoading}
            aria-label={
              isLoading
                ? "Building your miniapp"
                : isAuthenticated
                ? "Build your miniapp"
                : "Get started building"
            }
          >
            {isLoading ? (
              <div className="flex items-center">
                <div
                  className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                  aria-hidden="true"
                ></div>
                <span>Building...</span>
              </div>
            ) : isAuthenticated ? (
              "Build App"
            ) : (
              "Goto Minidev App +"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};
