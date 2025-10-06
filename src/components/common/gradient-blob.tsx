import React from "react";
import { cn } from "@/lib/utils";

export default function GradientBlob({
  className,
  width,
}: {
  className?: string;
  width?: string;
}) {
  return (
    <div className="relative isolate">
      <div aria-hidden="true" className={className}>
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 80% 20%, 100% 60%, 70% 90%, 30% 100%, 0% 70%, 10% 30%)",
          }}
          className={cn(
            "aspect-[1155/678]  bg-gradient-to-br from-primary  to-primary opacity-30",
            width
          )}
        />
      </div>
    </div>
  );
}
