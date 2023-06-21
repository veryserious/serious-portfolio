import React from "react";
import ImageCard from "./ImageCard";
1;
export default function ImageCardGroup({ cards }: { cards: any[] }) {
  // TODO - Remove Json parse and stringify hack once react have patched their bug --> https://github.com/vercel/next.js/issues/47447
  return (
    <div className="flex flex-col lg:flex-row flex-wrap ">
      {cards.map((card, i) => (
        <div key={i} className="flex flex-col basis-full lg:basis-1/3 p-3">
          <ImageCard card={JSON.parse(JSON.stringify(card))} />
        </div>
      ))}
    </div>
  );
}
