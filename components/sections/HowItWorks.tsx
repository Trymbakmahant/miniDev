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
      {/* Dithercore Background */}
      <div className="absolute inset-0 bg-white/95 mx-8 my-16 border-2 border-purple-400/70 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-pink-100/30 to-cyan-100/30"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
            linear-gradient(90deg, transparent 25%, rgba(128,0,255,0.1) 25%, rgba(128,0,255,0.1) 50%, transparent 50%, transparent 75%, rgba(128,0,255,0.1) 75%),
            linear-gradient(0deg, transparent 25%, rgba(255,0,128,0.1) 25%, rgba(255,0,128,0.1) 50%, transparent 50%, transparent 75%, rgba(255,0,128,0.1) 75%)
          `,
            backgroundSize: "15px 15px",
          }}
        ></div>
        <div className="absolute top-4 left-4 text-purple-600 font-mono text-xs tracking-wider font-semibold">
          &gt; PROCESSING WORKFLOW...
        </div>
        <div className="absolute top-4 right-4 text-pink-600 font-mono text-xs tracking-wider font-semibold">
          AI_GENERATION ✓
        </div>
        <div className="absolute bottom-4 left-4 text-cyan-600 font-mono text-xs tracking-wider font-semibold">
          BUILD_SYSTEM v2.0
        </div>
        <div className="absolute bottom-4 right-4 text-green-600 font-mono text-xs tracking-wider font-semibold">
          DEPLOY_READY ✓
        </div>
      </div>
      <div className="how-it-works-float absolute -left-60 top-1/2 -translate-y-1/2 text-primary/10 text-[40rem] leading-none material-symbols-outlined transform -rotate-45">
        integration_instructions
      </div>
      <div className="how-it-works-content z-10 flex flex-col gap-16 w-full max-w-[960px]">
        <div className="flex flex-col gap-4 text-center">
          <h1
            id="how-it-works-heading"
            className="how-it-works-title text-text-primary tracking-light text-5xl font-bold leading-tight md:text-6xl font-display"
          >
            How it Works
          </h1>
          <p className="text-text-secondary text-lg font-normal leading-normal max-w-2xl mx-auto font-display">
            Building your miniapp is a simple, three-step process designed to be
            intuitive and fast.
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
    </section>
  );
};
