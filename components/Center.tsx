import React from "react";

export default function Center({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      {children}
    </div>
  );
}
