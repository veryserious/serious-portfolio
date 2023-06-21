"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";

export default function ImageCard({ card }: { card: any }) {
  const { link } = card;
  const [hover, setHover] = React.useState(false);

  const hoverClasses = hover ? "scale-105 " : "scale-100";

  return (
    <div className="relative h-72 rounded-md overflow-hidden">
      <Image
        src={card.image || "/cage.gif"}
        alt=""
        fill
        className={`${hoverClasses} transition-all duration-300`}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <div className="absolute z-20 left-1/2 top-[85%] -translate-x-1/2 -translate-y-[85%]">
        <Button variant="externalLink" href={link}>
          <span className="text-white">View project</span>
        </Button>
      </div>

      <div
        className="absolute w-full h-full bg-gradient-to-t from-black to-40% z-10"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      ></div>
    </div>
  );
}
