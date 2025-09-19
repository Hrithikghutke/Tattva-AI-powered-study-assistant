import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center text-center py-10 sm:py-15 lg:p-20 lg:pb-28 transition-all animate-in px-7 lg:px-12 max-w-7xl">
      <div className="flex flex-row items-center ">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-linear-to-r from-secondary via-primary to-accent animate-gradient-x group">
          <Badge
            variant={"secondary"}
            className="relative bg-white rounded-full px-4 py-2 text-sm lg:px-6 lg:py-2 lg:text-base font-medium group-hover:bg-secondary transition-colors duration-200 "
          >
            <Sparkles className="mr-2 h-5 w-5 lg:h-6 lg:w-6 animate-pulse text-primary" />
            <p className="text-primary">Powered by AI</p>
          </Badge>
        </div>
      </div>

      <h1 className="font-extrabold py-6 lg:py-8">
        Ace Your Studies with{" "}
        <span className="relative inline-block ">
          <span className="relative z-10 px-2">AI-Powered</span>
          <span className="absolute inset-[-2] bg-primary/20 -rotate-1 rounded-lg transform -skew-y-1 aria-hidden:'true' "></span>{" "}
        </span>
        Summaries & Practice
      </h1>
      <h2 className="text-lg pb-6 lg:pb-8 text-gray-600 font-normal md:text-xl lg:w-2/3 lg:text-2xl">
        Tattva helps you quickly summarize subjects and prepare smarter for
        exams with personalized AI-generated questionnaires — saving you time
        and boosting confidence.
      </h2>
      <div className="">
        <Button
          variant={"link"}
          className="text-white hover:no-underline px-7 lg:py-6 lg:px-10 bg-gradient-to-r from-primary to-accent rounded-full  hover:from-accent hover:to-primary  "
        >
          <Link
            href="/pricing"
            className="flex gap-2 items-center justify-center "
          >
            <span className="font-semibold lg:text-lg">Try Tattva</span>
            <ArrowRight className="animate-pulse" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default HeroSection;
