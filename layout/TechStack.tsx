import React from "react";

import Stack from "@/components/Stack";
import Button from "@/components/Button";
import IconGroup from "@/components/IconGroup";

export default function TechStack() {
  return (
    <Stack gap={"20"}>
      <Stack gap={"10"}>
        <h2 className="font-bold text-grey-800 lg:text-3xl mb-6">
          I build things with...
        </h2>
        <IconGroup variant="stack" />
      </Stack>
      <div>
        <Button variant="samePageLink" href="#full-stack">
          See the full stack
        </Button>
      </div>
    </Stack>
  );
}
