import { Pizza } from "lucide-react";
import React from "react";

function DemoSection() {
  return (
    <section>
      <div className="py-10 lg:py-20 max flex flex-col items-center text-center space-y-4 ">
        <Pizza className="bg-secondary border-1 border-gray-300 rounded-xl w-8 h-8 p-1.5 text-primary backdrop-blur-xl " />

        <h3 className="capitalize font-bold text-2xl w-xs lg:text-4xl lg:w-3xl md:text-2xl md:w-2xl">
          Watch how <span className="text-primary">Tattva’s AI</span> turns your
          study material into clear,{" "}
          <span className="text-primary capitalize">time-saving insights</span>{" "}
        </h3>
      </div>
    </section>
  );
}

export default DemoSection;
