import React from "react";
import { ArrowRight, CheckIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function PricingSection() {
  const plans = [
    {
      id: "basic",
      name: "Basic",
      price: "149",
      description: " Perfect for occasional use.",
      items: [
        "Unlimited PDF Summeries",
        "Priority Processing",
        "24/7 Priority Support",
        "Markdown Export",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "299",
      description: "For Professionals and teams.",
      items: [
        "Unlimited PDF Summeries",
        "Priority Processing",
        "24/7 Priority Support",
        "Markdown Export",
      ],
    },
  ];

  const PricingCard = ({ name, price, description, items, id }: any) => {
    return (
      <div
        className={cn(
          "border-2 hover:transform hover:-translate-y-5 transition duration-300 ease-in-out rounded-xl p-8 text-start w-xs lg:w-full max-w-lg",
          id === "pro" ? "border-primary" : "border-border"
        )}
      >
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-700">{description}</p>
        <p className="text-3xl text-primary font-black mt-4">
          &#8377;{price}
          <span className="\ text-xs font-normal ml-0.5">/month</span>
        </p>

        <ul className=" mt-4  space-y-2">
          {items.map((item: any, idx: any) => (
            <li key={idx} className="flex  items-center space-x-2">
              <CheckIcon size={18} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex w-full mt-5">
          <Link
            href=""
            className="flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-accent  w-full rounded-2xl p-1.5 text-primary-foreground hover:bg-accent transition duration-400 ease-in-out hover:cursor-pointer"
          >
            Buy Now <ArrowRight className="animate-bounce" size={15} />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-10">
      <div className="">
        <h2 className="text-center font-bold text-primary p-10">Pricing</h2>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-stretch gap-8">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
