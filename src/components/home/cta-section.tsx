import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function CTASection() {
  return (
    <section className="bg-secondary py-12 mt-20 ">
      <div className="py-5 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to save hours of reading time?
          </h2>
          <p className="text-gray-600 text-md sm:text-xl lg:text-xl w-xs sm:w-xl lg:w-2xl">
            Transform lenghty documents into clear, actionalble insights with
            our AI-Powered summarizer
          </p>
        </div>

        <div className="flex items-center justify-center mt-5  ">
          <Link
            href="/#pricing"
            className="flex items-center justify-center hover:cursor-pointer  sm:text-xl lg:text-xl text-secondary py-3 gap-1.5 bg-gradient-to-r from-primary to-accent rounded-3xl w-xs hover:bg-gradient-to-r hover:from-accent hover:to-primary transition duration-400 ease-in-out"
          >
            Get Started <ArrowRight size={18} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
