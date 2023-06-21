import React from "react";
import Button from "@/components/Button";
import IconGroup from "@/components/IconGroup";

export default function TechStack() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-grey-800 text-2xl lg:text-3xl">
          I build things with...
        </h2>
        <IconGroup variant="stack" />
      </div>
      <div>
        <Button variant="samePageLink" href="#full-stack">
          See the full stack
        </Button>
      </div>
    </div>
  );
}
