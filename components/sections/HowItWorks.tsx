import React from "react";
import { useTextAnimations } from "../../hooks/useTextAnimations";

export const HowItWorks: React.FC = () => {
  const { addTextRef } = useTextAnimations();
  const steps = [
    {
      icon: "edit_note",
      title: "Describe Your App",
      description:
        "Start by describing your app idea in plain English. No coding required.",
    },
    {
      icon: "auto_awesome",
      title: "Generate & Customize",
      description:
        "Our AI will generate a functional miniapp. You can then customize it to your liking.",
    },
    {
      icon: "share",
      title: "Share on Farcaster",
      description:
        "Once you're happy, share it directly with your followers on Farcaster.",
    },
  ];

  return (
    <section
      className="relative bg-orange-200 flex flex-col items-center justify-center min-h-screen px-4 md:px-10 lg:px-20 xl:px-40 overflow-hidden py-32"
      aria-labelledby="how-it-works-heading"
    >
      {/* Pill Container */}
      <div className="relative bg-white/98 backdrop-blur-md border-2 border-purple-400/80 shadow-2xl rounded-[40px] md:rounded-[80px] p-6 md:p-16 w-full max-w-6xl mx-2 md:mx-4">
        <div className="absolute top-3 left-4 md:top-6 md:left-10 text-purple-600 font-mono text-xs md:text-sm tracking-wider font-bold">
          &gt; PROCESSING WORKFLOW...
        </div>
        <div className="absolute top-3 right-4 md:top-6 md:right-10 text-pink-600 font-mono text-xs md:text-sm tracking-wider font-bold">
          AI_GENERATION ✓
        </div>
        <div className="absolute bottom-3 left-4 md:bottom-6 md:left-10 text-cyan-600 font-mono text-xs md:text-sm tracking-wider font-bold">
          BUILD_SYSTEM v2.0
        </div>
        <div className="absolute bottom-3 right-4 md:bottom-6 md:right-10 text-green-600 font-mono text-xs md:text-sm tracking-wider font-bold">
          DEPLOY_READY ✓
        </div>
        <div className="how-it-works-content z-10 flex flex-col gap-8 md:gap-16 w-full">
          <div className="flex flex-col gap-3 md:gap-4 text-center">
            <h1
              id="how-it-works-heading"
              ref={addTextRef}
              className="how-it-works-title text-text-primary tracking-light text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-display"
            >
              How it Works
            </h1>
            <p
              ref={addTextRef}
              className="text-text-secondary text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto font-display px-4"
            >
              Building your miniapp is a simple, three-step process designed to
              be intuitive and fast.
            </p>
          </div>
          <div className="how-it-works-cards grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="how-it-works-card step-card flex flex-col items-center text-center gap-3 md:gap-4 rounded-[25px] md:rounded-[50px] border border-gray-200 bg-white/50 backdrop-blur-sm p-4 md:p-8"
              >
                <div className="text-primary bg-primary/10 p-3 md:p-4 rounded-[15px] md:rounded-[25px]">
                  <span className="material-symbols-outlined !text-3xl md:!text-4xl">
                    {step.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-text-primary text-lg md:text-xl font-bold leading-tight font-display">
                    {step.title}
                  </h2>
                  <p className="text-text-secondary text-sm md:text-base font-normal leading-normal font-display">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
