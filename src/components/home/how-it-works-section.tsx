import React, { ReactNode } from "react";
import GradientBlob from "../common/gradient-blob";
import { Bot, FileOutput, MoveRight, Newspaper } from "lucide-react";

function HowitWorks() {
  type Step = {
    icon: ReactNode;
    title: string;
    description: string;
  };

  const steps: Step[] = [
    {
      icon: (
        <Newspaper
          size={70}
          className="bg-gradient-to-tr from-primary to-accent text-secondary p-4 rounded-2xl "
        />
      ),
      title: "Upload Document",
      description: "Simply Drag and drop your PDF document or click to upload.",
    },
    {
      icon: (
        <Bot
          size={70}
          className="bg-gradient-to-tr from-primary to-accent text-secondary p-4 rounded-2xl "
        />
      ),
      title: "AI Analysis",
      description:
        "Our advance AI Processes and analyzes your document instantly.",
    },
    {
      icon: (
        <FileOutput
          size={70}
          className="bg-gradient-to-tr from-primary to-accent text-secondary p-4 rounded-2xl "
        />
      ),
      title: "Upload Document",
      description: "Recieve a clear and concise summary of your document.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-10">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
        <GradientBlob
          className="pointer-events-none absolute top-20 left-1 -translate-x-1/2 -z-10 blur-[80px]"
          width="w-[16rem] sm:w-[25rem]"
        />

        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="uppercase font-bold text-lg text-primary">
            How it works
          </h2>
          <h3 className="capitalize font-bold  text-2xl  lg:w-3xl md:text-2xl md:w-2xl  lg:text-4xl ">
            Transform any Chapter into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ">
              Easy-to-digest
            </span>{" "}
            summary in three simple steps.
          </h3>
        </div>

        <div className="relative grid grid-cols-1 gap-1 md:gap-8 lg:gap-8 md:grid-cols-3 lg:grid-cols-3 mx-auto text-center max-w-6xl">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-1 p-6 group hover:cursor-pointer hover:border-1 hover:border-primary hover:rounded-2xl hover:bg-primary/10 transition-all duration-400"
            >
              {step.icon}

              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-gray-500  transition-all duration-400 text-md mt-[-5] ">
                {step.description}
              </p>

              {idx < steps.length - 1 && (
                <div className="relative lg:left-40 md:left-30 ">
                  <div className="absolute hidden md:block   transform -translate-y-3/1  ">
                    <MoveRight
                      size={32}
                      strokeWidth={1}
                      className="text-primary"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowitWorks;
