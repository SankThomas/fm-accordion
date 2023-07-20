import React, { useState } from "react";
import { questions } from "./questions";
import SingleQuestion from "./SingleQuestion";

export default function App() {
  const [cards] = useState(questions);

  return (
    <>
      <section className="max-w-xl mx-auto py-20 px-4">
        <h1 className="text-center uppercase tracking-widest font-bold mb-8">
          Challenge Faqs
        </h1>

        <section className="grid grid-cols-1 gap-8">
          {cards.map((card, index) => (
            <SingleQuestion {...card} key={index} />
          ))}
        </section>
      </section>
    </>
  );
}
