import React from "react";
import ImageCard from "./ImageCard";
1;
export default function ImageCardGroup({ cards }: { cards: any[] }) {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap ">
      {cards.map((card, i) => (
        <div key={i} className="flex flex-col basis-full lg:basis-1/3 p-3">
          <ImageCard card={card} />
        </div>
      ))}
    </div>
  );
}
