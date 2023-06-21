import { TailwindNumberStr } from "@/types";
import React from "react";

type StackProps = {
  children: React.ReactNode;
  gap?: TailwindNumberStr;
  className?: string;
};

export default function Stack({ children, gap, className }: StackProps) {
  return (
    <div
      className={`flex flex-col ${gap ? "gap-" + gap : "gap-0"}${
        className ? " " + className : ""
      }`}
    >
      {children}
    </div>
  );
}
