import React from "react";

export const HowItWorks: React.FC = () => {
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
      className="relative flex flex-col items-center justify-center h-screen px-4 md:px-10 lg:px-20 xl:px-40 overflow-hidden"
      aria-labelledby="how-it-works-heading"
    >
      {/* Pill Container */}
      <div className="relative bg-white/98 backdrop-blur-md border-2 border-purple-400/80 shadow-2xl rounded-[80px] p-16 w-full max-w-6xl mx-4">
        <div className="absolute top-6 left-10 text-purple-600 font-mono text-sm tracking-wider font-bold">
          &gt; PROCESSING WORKFLOW...
        </div>
        <div className="absolute top-6 right-10 text-pink-600 font-mono text-sm tracking-wider font-bold">
          AI_GENERATION ✓
        </div>
        <div className="absolute bottom-6 left-10 text-cyan-600 font-mono text-sm tracking-wider font-bold">
          BUILD_SYSTEM v2.0
        </div>
        <div className="absolute bottom-6 right-10 text-green-600 font-mono text-sm tracking-wider font-bold">
          DEPLOY_READY ✓
        </div>
        <div className="how-it-works-content z-10 flex flex-col gap-16 w-full">
          <div className="flex flex-col gap-4 text-center">
            <h1
              id="how-it-works-heading"
              className="how-it-works-title text-text-primary tracking-light text-5xl font-bold leading-tight md:text-6xl font-display"
            >
              How it Works
            </h1>
            <p className="text-text-secondary text-lg font-normal leading-normal max-w-2xl mx-auto font-display">
              Building your miniapp is a simple, three-step process designed to
              be intuitive and fast.
            </p>
          </div>
          <div className="how-it-works-cards grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-4 rounded-[50px] border border-gray-200 bg-white/50 backdrop-blur-sm p-8"
              >
                <div className="text-primary bg-primary/10 p-4 rounded-[25px]">
                  <span className="material-symbols-outlined !text-4xl">
                    {step.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-text-primary text-xl font-bold leading-tight font-display">
                    {step.title}
                  </h2>
                  <p className="text-text-secondary text-base font-normal leading-normal font-display">
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
