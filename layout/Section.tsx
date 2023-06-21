import React from "react";
import Center from "@/components/Center";
import Container from "@/components/Container";

export default function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={className}>
      <Center>
        <Container>{children}</Container>
      </Center>
    </section>
  );
}
