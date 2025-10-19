import { cn } from "@/lib/utils";
import React from "react";

function ColorBlob({
  className,
  width,
}: {
  className?: string;
  width?: string;
}) {
  return <div className={cn("absolute ", className, width)}></div>;
}

export default ColorBlob;
