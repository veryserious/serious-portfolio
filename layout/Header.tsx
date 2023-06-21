import Button from "@/components/Button";
import Center from "@/components/Center";
import Container from "@/components/Container";
import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-6">
      <nav>
        <Center>
          <Container>
            <div className="flex flex-row justify-between items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="The word Very Serious with the Y falling over"
                  width={100}
                  height={45}
                />
              </Link>
              <Button>Get in touch</Button>
            </div>
          </Container>
        </Center>
      </nav>
    </header>
  );
}
